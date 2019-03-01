import { Component, OnInit} from '@angular/core';
import { AppShare } from '../../providers/app.share';

@Component({
  selector: 'page-ucenter',
  templateUrl: 'index.html'
})

export class UcenterPage implements OnInit
{
  App = window.App;
  constructor(private appShare: AppShare)
  {
    this.InitUserInfo();
  }

  ngOnInit()
  {

  }

  InitUserInfo()
  {
    console.log(App.UserInfo);
 
    this.ShowPhone = App.UserInfo.mobile.substr(0,3) + this.ShowPhone + App.UserInfo.mobile.substr(-4);
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
            this.appShare.wxShare(0)
          }
        }

      ]
    }
    App.ShowActionSheet(ActionSheetConfig);
  }




  HeadTitle: string = "我 的";
  ShowPhone: string = "****";
  ImgData = { ImgSrc: void 0 };
  private Wechat = (<any>window).Wechat;
}

