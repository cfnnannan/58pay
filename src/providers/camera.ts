import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

@Injectable()
export class TCameraService
{
    constructor(private Camera: Camera)
    {

    }
  /*
    ReadFileAsText(FileName: string): Promise<string>
    {
        return this.File.readAsText(this.File.dataDirectory, FileName)
            .then(result => result)
            .catch(error =>
            {
                return null;
            });
    }

    WriteFile(FileName: string, data: string | Blob | ArrayBuffer): Promise<any>
    {
        console.log(this.File.dataDirectory+FileName);

        return this.File.writeFile(this.File.dataDirectory, FileName,
            data, { replace: true })
            .catch(error =>
            {
                return null;
            });
    }

    UploadFile(uri:string, imageuri:string, fileoptions: FileUploadOptions) {

      App.ShowLoading('上传中.......')
      const fileTransfer: FileTransferObject = this.transfer.create();

      // let options: FileUploadOptions = {
      //   fileKey: 'ionicfile',
      //   fileName: 'ionicfile',
      //   chunkedMode: false,
      //   mimeType: "image/jpeg",
      //   headers: {}
      // }
      let FileName = new Date().getTime() + '.jpg';
      let options: FileUploadOptions = {
        fileKey: "file",
        fileName: new Date().getTime() + '.jpg',
        chunkedMode: false,
        mimeType: "multipart/form-data",
      };

      fileTransfer.upload(imageuri, 'http://39.104.57.129/kpay/api/image/upload', options)
        .then((data) => {
          alert('success' + data.bytesSent);

          App.HideLoading();
          App.ShowToast('上传成功');

      }, (err) => {

        console.log(err);
        App.HideLoading();
        App.ShowError(err);
      });
    }

    DataURItoBlob(dataURI)
    {
        let byteString = atob(dataURI.split(',')[1]);
        let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        let ab = new ArrayBuffer(byteString.length);
        let ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], {type: mimeString});
    }
  */
    GetPicture(type: number): Promise<string>
    {
        let cameraOpt: CameraOptions = {
            quality: 60,
            destinationType: this.Camera.DestinationType.DATA_URL,
            encodingType: this.Camera.EncodingType.JPEG,
            mediaType: this.Camera.MediaType.PICTURE,
            correctOrientation: true,
            allowEdit: true,
            targetWidth: App.Platform.width() * 2,
            targetHeight: App.Platform.height() * 2,
        };
        console.log('onDidDismiss = ' + type);
        switch (type)
        {
            case 0: // 相机
                cameraOpt.sourceType = this.Camera.PictureSourceType.CAMERA;
                break;
            case 1: // 相册
                cameraOpt.sourceType = this.Camera.PictureSourceType.PHOTOLIBRARY;
                break;
        }
        return this.Camera.getPicture(cameraOpt)
            .catch(error =>
            {
                console.log(error);
                throw error;
            });
    }

}
