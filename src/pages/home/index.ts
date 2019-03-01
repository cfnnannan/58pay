import { Component, ViewChild, ElementRef, NgZone, OnInit } from '@angular/core';
import { Content } from 'ionic-angular';
import { HomeService } from '../../providers/homeservice';
import { SwiperComp } from '../../UltraCreation/ng-ion/swiper';
import { AppShare } from '../../providers/app.share';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-home',
  templateUrl: 'index.html'
})


export class HomePage implements OnInit
{
  App = window.App;
  @ViewChild(Content) content: Content;
  @ViewChild('FixedHeader') FixedHeader: ElementRef;
  constructor(public elementRef: ElementRef, public zone: NgZone, public Service: HomeService, private appShare: AppShare) {
    this.GetProfitToday();

  }

  ngOnInit()
  {


    this.content.ionScroll.subscribe(($event: any) => {
      this.zone.run(() => {
        this.TopVue = Math.ceil(this.content.scrollTop);  //ceil 对一个数进行上舍入
        if (this.TopVue > 15)
        {
          this.default_header = false;
        }
        else{
          this.default_header = true;
        }
        this.OpacityHeader = this.TopVue > 10 && this.TopVue < 20 ? (this.TopVue - 15) / 10 : 1
      })
    });

  }

  ngAfterViewInit()
  {
    
    let _DomHeader = this.FixedHeader.nativeElement as HTMLElement;
    let header_height = _DomHeader.clientHeight + 25;
    this.ConBorderTop = header_height + 'px';
   
  }
  


  GetProfitToday()
  {
    this.Service.GetProfitToday().then(res => {
      // console.log(res);
      // res = {"total":888 ,"detail":[{"id":123124,"profit":888,"level":1},{"id":123123,"profit":888,"level":1},{"id":1231,"profit":888,"level":1}]};
      if (res.total)
      {
        this.Notice = res.detail;
        this.NoticeSwiper.Update();
        this.ProfitTol = res.total/100;
      }
    })
  }
  Invite()
  {
    let ActionSheetConfig =
    {
      title: '分享方式',
      buttons: [
        {
          text: '朋友圈',
          icon: 'friends',
          cssClass: 'action-sheet-cust action-sheet-friends',
          role: '分享到朋友圈',
          handler: () => {
            this.appShare.wxShare(1);
          }

        },
        {
          text: '微信好友',
          cssClass: 'action-sheet-cust  action-sheet-wx',
          icon: 'wx',
          handler: () => {
            this.appShare.wxShare(0);
          }
        }
      ]
    }
    App.ShowActionSheet(ActionSheetConfig);
  }

  clickfreflinkA()
  {
    new InAppBrowser().create('http://t.cn/RQSGp7F');
  }
  clickfreflinkB()
  {
    new InAppBrowser().create('https://channel.91gfd.com/register/4?channelCodePreFix=zY5zr5L11');
  }
  clickfreflinkC()
  {
    new InAppBrowser().create('https://c.lattebank.com/hbzc/a1/293?channel=hz23');
  }

  clickpingabank()
  {
    new InAppBrowser().create('https://interacts.hq.vidata.com.cn/h5/card-platform/index.html?source=1174');
  }
  clickzhaosbank()
  {
    new InAppBrowser().create('https://interacts.hq.vidata.com.cn/h5/card-platform/index.html?source=1173');
  }
  clickxingybank()
  {
    new InAppBrowser().create('https://interacts.hq.vidata.com.cn/h5/card-platform/index.html?source=1172');
  }


  @ViewChild('notice') private NoticeSwiper: SwiperComp;
  TopVue: number = 0;
  OpacityHeader: number = 1;
  default_header: Boolean = true;
  Notice: Array<any> = [];
  ProfitTol: number = 0;
  ConBorderTop: string;
  private Wechat = (<any>window).Wechat;

}
