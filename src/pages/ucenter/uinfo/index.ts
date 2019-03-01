import { Component } from '@angular/core';
import { TAuthService } from '../../../providers/auth';
import { TCameraService } from '../../../providers/camera';
// import { CropPhoto } from '../../../shared/component/crop';

@Component({
  selector: 'page-uinfo',
  templateUrl: 'index.html'
})

export class UinfoPage
{
    App = window.App;
    constructor(public Auth: TAuthService, public CameraSvc: TCameraService)
    {
      this.InitUserInfo();
    }

    //电话号码与身份信息
    InitUserInfo()
    {
        this.UserInfo = App.UserInfo;
        if(this.UserInfo.mobile !== null) this.ShowPhone = this.UserInfo.mobile.substr(0,3) + this.ShowPhone + this.UserInfo.mobile.substr(-4);
        if(this.UserInfo.idCardNo !== null) this.ShowID = this.UserInfo.idCardNo.substr(0,6) + this.ShowID + this.UserInfo.idCardNo.substr(-4);

        this.ImgData.ImgSrc = App.UserFace;
        if(this.UserInfo.name !== null)
        {
            this.infoName = this.UserInfo.name.substr(-1);
            let str = '';
            for (let i = 0; i < this.UserInfo.name.length-1; i++)
            {
              str += '*';
            }
            this.infoName =  str +  this.infoName;
        }
    }


    //更改昵称
    ChangeNickName()
    {
        let _alertOption =
        {
            title: '昵称',
            inputs:
            [
                {
                  name: 'nickName',
                  value: this.UserInfo.nickName
                },
            ],
            buttons:
            [
                {
                  text: '取消'
                },

                {
                    text: '保存',
                    handler: data =>
                    {
                      // 请求接口保存新昵称
                      this.UserInfo.nickName = data.nickName;
                      this.Auth.ModifyUserInfo({nickName: data.nickName});
                    }
                }
            ]
        }
        App.ShowAlert(_alertOption).then((modal) =>
            modal.onDidDismiss(() =>
            {
            })
        );
    }


    public ImgData = { ImgSrc: void 0 };
    public nickname;
    public HeadTitle: string = "个人资料";
    public UserInfo: any = [];
    public ShowPhone: string = "****";
    public ShowID: string = "********";
    public infoName: string = " ";
}



  /*TakePhoto()
  {
    App.ShowLoading();
    let _alertConfig =
    {
      title:'上传头像',
      buttons: [
        {
          text: '相机拍照',
          handler: () => {
            this.CameraSvc.GetPicture(0).then(imageData =>
              {
                let imgSrc = 'data:image/jpeg;base64,' + imageData;
                this.ImgData.ImgSrc = imgSrc;
                localStorage.setItem('imageface', this.ImgData.ImgSrc);
                App.UserFace;
                App.HideLoading();

              }, (error) =>
              {
                  App.HideLoading();
              });
          }
        },
        {
          text: '相册',
          handler: () => {
            this.CameraSvc.GetPicture(1).then(imageData =>
              {
                let imgSrc = 'data:image/jpeg;base64,' + imageData;
                this.ImgData.ImgSrc = imgSrc;
                localStorage.setItem('imageface', this.ImgData.ImgSrc);
                App.UserFace;
                App.HideLoading();
                // this.ShowCropModal(imgSrc);
              }, (error) =>
              {
                  App.HideLoading();
              });
          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            App.HideLoading();
          }
        }
      ]
    }
    App.ShowAlert(_alertConfig);
  }*/


  /*
  ShowCropModal(imgSrc)
  {
    App.ShowModal(CropPhoto, {imgSrc: imgSrc, imgData: this.ImgData }).then((modal) =>
    {
        App.HideLoading();
        modal.onDidDismiss(() => {
          // this.Auth.UploadFace(this.ImgData.ImgSrc);
          App.HideLoading();
        });
    }).catch(error =>
    {
        App.HideLoading();
        App.ShowError(error);
    });
  }
  */

  /*
  SavePhotoToLocal(ImgData: any)
  {
      let FileName = new Date().getTime() + '.jpg';
      this.CameraSvc.CameraFile.FileName = FileName;
      alert(FileName);
      console.log('fileName = ' + FileName);
      return this.CameraSvc.WriteFile(this.CameraSvc.CameraFile.FileName, ImgData)
          .then((result) =>
          {

              ImgData.ImgSrc = void 0;
              alert(result.ImgSrc);
              console.log('write success');
              return true;
          })
          .catch((error) =>
          {
              console.log('write error = ' + error);
          });
  }
  */
  /*
  ChangeImg() {

    let options = {
      targetWidth: 400,
     targetHeight: 400
    };

    let actionSheet = this.alertCtrl.create({
      title:'上传头像',
      buttons: [
        {
          text: '相册',
          handler: () => {

            this.native.getPictureByPhotoLibrary(options).then(imageBase64 => {
              this.getPictureSuccess(imageBase64);
            });
          }
        },
        {
          text: '相机拍照',
          handler: () => {
            this.native.getPictureByCamera(options).then(imageBase64 => {
              this.getPictureSuccess(imageBase64);
             });
          }
        },
        {
          text: '取消',
          role: 'cancel'
        }
      ]
    });

    actionSheet.present();
  }

  private getPictureSuccess(imageBase64) {
    this.isChange = true;
    this.imageBase64 = <string>imageBase64;
    this.avatarPath = 'data:image/jpeg;base64,' + imageBase64;
  }
  */
