import { Component } from '@angular/core';
declare let Wechat;   

@Component({
  selector: 'page-invfriends',
  templateUrl: 'index.html'
})

export class InvfriendsPage
{
  App = window.App;
  constructor() {

  }

//验证微信是否安装

  Test()
  {
    let wechat = (<any>window).Wechat;
    wechat.isInstalled(function (installed) {
      if(!installed){
         this.toastService.show('您没有安装微信！');
        return ;
      }
    }, function (reason) {
         this.toastService.show("Failed: " + reason);
    });
  }


  // 成功 发送朋友圈 只文字
  Text()
  {
    Wechat.share({
        text: "This is just a plain string",
        scene: Wechat.Scene.TIMELINE   // share to Timeline
    }, function () {
        alert("Success");
    }, function (reason) {
        alert("Failed: " + reason);
    });
  }

  Text2()
  {
    let wechat = (<any>window).Wechat;
    wechat.share({
        text: "This is just a plain string",
        scene: wechat.Scene.Timeline   // share to Timeline
    }, function () {
        alert("Success");
    }, function (reason) {
        alert("Failed: " + reason);
    });
  }

  shareWxTimeLine(){
    let wechat = (<any>window).Wechat;
    wechat.share({
      message: {
          title: 'title',
          description: 'description',
          thumb: 'www/assets/imgs/58icon.png',
          media: {
              type: wechat.Type.LINK,
              webpageUrl: 'www.baidu.com'
          }
      },
      scene: wechat.Scene.SESSION  // share to Timeline
    }, function () {
        alert('分享成功');
    }, function (reason) {
        alert("Failed: " + reason);
    });

  }
  headTitle: string = "邀请好友";
}
