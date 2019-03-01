import { Component, ViewChild, ElementRef, NgZone, OnInit } from '@angular/core';
import { Content } from 'ionic-angular';
import { MineService } from '../../../providers/mineservice';
import * as Types from '../../../providers/types/common'

@Component({
  selector: 'page-profits',
  templateUrl: 'index.html'
})

export class ProfitsPage implements OnInit
{
  @ViewChild(Content) content: Content;
  @ViewChild('chartPanel') ChartPanel: ElementRef;
  @ViewChild('profitList') ProfitList: ElementRef;

  constructor(public elementRef: ElementRef, public zone: NgZone, public Service: MineService)
  {
    this.UpdateMonth();
    this.GetUserProfits();
    this.Service.GetProfitList('hy');
  }

  ngOnInit()
  {
    this.InitChartData();
    let _DomChartPanel = this.ChartPanel.nativeElement as HTMLElement;
    this.DomChartPanel.Height = _DomChartPanel.offsetHeight;
    this.DomChartPanel.Top = Math.ceil(_DomChartPanel.getBoundingClientRect().top);
    this.content.ionScroll.subscribe(($event: any) => {
      this.zone.run(()=>{
        this.TopVue = Math.ceil(this.content.scrollTop);
        this.OpacityVue = this.SetOpacityVue(this.TopVue);
      })
    });

    this.Service.GetProfitList('hy').then(res => this.ProFitsData = res);
  }

  ionViewDidLoad()
  {
    this.UpdateData(1);
  }

  ToggleProfits()
  {
    this.IsPanel = !this.IsPanel;
    if(!this.IsPanel)
    {
      for (let item of this.ProFitsData)
      {
        item.close = true;
      }
    }
    else
    {
      for (let item of this.ProFitsData)
      {
        item.close = false;
      }
    }
    if (!this.IsPanel) this.content.scrollToTop();
    if (this.IsPanel)
    {
      this.DomChartPanel.IsShow = true;
      this.HeaderTitle = '我的分润';
      this.HeaderTitleAlign = 'center';
      this.OperationIcon = '';
      this.content.scrollTo(0, this.DomChartPanel.Top + Math.ceil(this.ProfitList.nativeElement.getBoundingClientRect().top) -32, 200);
    }
  }

  get SetChartPanel(): string
  {
      if (!this.IsPanel) return;
      if(this.TopVue >= 120)
      {
        this.DomChartPanel.IsShow = false;
        this.HeaderTitle = '累计分润：￥' + this.Profits.profit/100;
        this.HeaderTitleAlign = 'left';
        this.OperationIcon = '&#xf471;';
        return 0 + 'px';
      }
      else
      {
        this.DomChartPanel.IsShow = true;
        this.HeaderTitle = '我的分润';
        this.HeaderTitleAlign = 'center';
        this.OperationIcon = '';
        return ;
      }
  }

  SetOpacityVue(value: number): number
  {
    if (value > 0 && value <= this.DomChartPanel.Top) {
      let n: number = 1-(value/this.DomChartPanel.Top);
      return parseFloat(n.toFixed(1));
    }
    return 1;
  }

  UpdateMonth()
  {

    let date = new Date();
    this.MonthNow = this.dateToW3C(date).substr(0, 7);
  }

  GetUserProfits()
  {
    this.Service.UserProfit().then(res => {
      this.Profits = res;
      this.TolAmount = '<span class="f-1-3">￥</span>' + res.balance/100;
    })
  }



  InitChartData()
  {
    let XAxis = this.GetChartXAxis(1);
    this.chartMize = {
      Type: 'bar',
      Legend: false,
      Options: { scaleShowVerticalLines: false, responsive: true, Height: 1000 },
      Labels: XAxis,
      Colors: [{
        backgroundColor: 'rgba(29, 131, 210, .5)'
      }],
      Data: [
        {
          data: []
        }
      ],
      HandlerClicked: (e) => {
        console.log(e);
      },
      HandlerHovered: (e) => {
        console.log(e);
      }
    }
  }

  async UpdateData(num) // 0 表示后一个月份 1 表示前一个月份
  {
    if (num)
    {
      if (this.Count > 0)
      {
        this.Count --;
      }
    }
    else
    {
      if (this.Count < 5)
      {
        this.Count ++;
      }
    }
    let XAxis = this.GetChartXAxis(this.Count);
    let ydata = await this.Service.GetProfitList('m', this.Count.toString(), XAxis.length);
    console.log(ydata);
    this.chartMize.Labels = XAxis;
    this.chartMize.Data = [
      {
        data: ydata
      }
    ]
  }

  GetChartXAxis(num) //当前月为0 前一个月为1
  {
    let xaxis_arr = [];
    let len = this.GetMonthLen(num);
    for (let i = 1; i < len + 1; i ++)
    {
      let tmp_xaxis;
      if (i%5 == 1)
        tmp_xaxis = i;
      else
        tmp_xaxis = '';
      xaxis_arr.push(tmp_xaxis);
    }
    return xaxis_arr;
  }

  dateToW3C(date) // date为日期对象
  {
    let year = date.getFullYear();
    let mouth = date.getMonth() + 1;
    let day = date.getDate();
    if (mouth < 10)
      mouth = "0" + mouth;
    if (day < 10)
      day = "0" + day;
    let result = year + '-' + mouth + '-' + day;
    return result;
  }

  computDate(day: number, date: any) //date为日期对象 day为应减天数
  {
    let time_stamp = date.getTime();
    let result_stamp = time_stamp - day * 864e5;
    let result_date = new Date(result_stamp);
    let result = this.DateToShow(result_date);
    return result;
  }

  DateToShow(date) // date为日期对象
  {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if (month < 10)
      month = "0" + month;
    if (day < 10)
      day = "0" + day;

    let result = month + '/' + day;
    return result;
  }

  GetMonthLen(num) // 当前月为0 前一个月为1 以此类推
  {
    let dateNow = new Date();
    let year = dateNow.getFullYear();
    let month = dateNow.getMonth() + 1;
    let tmp_date = new Date(year, Number(month)-num,0);
    let t_year = tmp_date.getFullYear();
    let t_month = tmp_date.getMonth() + 1;
    if (year == t_year && month == t_month)
    {
      this.ShowMonth = "当月";
    }
    else
    {
      this.ShowMonth = t_year + '-' + t_month;
    }

    let len = tmp_date.getDate();
    return len;
  }


  public TolAmount: any;
  public ProFitsData = Array<Types.ProFitsOptions>();
  public TabActive: number = 0;
  public TopVue: number = 1;
  public OpacityVue: number = 1;
  public chartMize:Types.ChartsOptions;
  public MonthNow: string;
  public Profits: any = {};
  public Count: number = 0;
  public ShowMonth: string;

  public IsPanel: boolean = true;
  public HeaderTitle: string = '我的分润';
  public HeaderTitleAlign: string = 'center';
  public OperationIcon: string = '';
  public DomChartPanel: Types.DomChartPanelOptions = { IsShow:true };
  public ChartY: Array<any>;
}


