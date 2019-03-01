//微信朋友圈分享
import { Injectable } from '@angular/core';
import { TApplication } from './application';

// declare var Wechat;
@Injectable()
export class AppShare
{
    //标题
    title: string = "58付-信用能收款，资金秒到账";
    //描述
    description: string = "用信用卡满足你资金需求，有信用卡就能收款。";  /*领券免手续费*/
    //分享链接
    link: string = "http://www.werunpay.com/invite?sourceid=";
    //分享图片
    image: string = "www/assets/imgs/58icon.png";

    constructor() {}

    wxShare(scene) {
        App.ShowLoading();
        try {
            this.Wechat.share({
                message: {
                    title: this.title,
                    description: this.description,
                    thumb: this.image,
                    media: {
                        type: this.Wechat.Type.WEBPAGE,
                        webpageUrl: this.link + App.UserInfo.userId
                    }
                },
                scene: scene == 0 ? this.Wechat.Scene.SESSION : this.Wechat.Scene.Timeline  // share to Timeline
            }, 
            function (){
                App.ShowToast('分享成功');
            }, 
            function (reason) {
                // alert("Failed: " + reason);
            });
        } catch (error) {
            console.log(error);
        } finally {
            App.HideLoading();
        }
    }
    private Wechat = (<any>window).Wechat;
}
