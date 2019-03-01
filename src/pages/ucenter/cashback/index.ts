import { Component } from '@angular/core';
import { MineService } from '../../../providers/mineservice';

@Component({
  selector: 'page-cashback',
  templateUrl: 'index.html'
})

export class CashbackPage
{

  constructor(public Service: MineService) {
      this.GetCashBack();
      this.NewMonth();
  }

  NewMonth()
  {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1 + '';
    if (Number(month) < 10)
    {
      month = '0' + month;
    }
    this.MonthNow = year + '-' + month;
  }

  GetCashBack()
  {
    this.Service.GetCashBack().then(res => {
      for (let i = 0; i < res.length; i++)
      {
        if ( res[i].type == 1 )
        {
          let tmp_json = {
            remark: res[i].remark,
            time: res[i].time,
            amount: res[i].amount
          }
          let flag = true;
          for (let j = 0; j < this.data.length; j ++)
          {
            if (tmp_json.time.substr(0,7) == this.data[j].month)
            {
              flag = false;
              this.data[j].data.push(tmp_json);
              this.data[j].total += tmp_json.amount;
              break;
            }
          }
          if (flag)
          {
            this.data.push({month: tmp_json.time.substr(0,7), data: [tmp_json], total: tmp_json.amount});
          }
        }
      }
    })
  }

  TitleText: string = "返现账户";
  TolAmount: string = "<span class='f-1-3'>￥</span>88.88"
  data: any = [];
  MonthNow: string = '';
}
