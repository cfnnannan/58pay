import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TAuthService } from '../../providers/auth';

@Component({
  selector: 'page-findpwd',
  templateUrl: 'index.html'
})

export class FindpwdPage implements OnInit
{
    App = window.App;
    constructor(public Service: TAuthService) {

    }
    ngOnInit()
    {
        this.Form_Group = new FormGroup({
            tel: this.tel = new FormControl('', [
                Validators.required,
                Validators.pattern(/^1[3|4|5|7|8][0-9]{9}$/)
            ]),
            VCode: this.VCode = new FormControl('',[
                Validators.required,
                Validators.minLength(4)
            ]),
        })
    }

    //倒计时
  times()
  {
    let count: number = 60;
    let timer = setInterval(() =>
    {
      if (count > 0)
      {
        count --;
        this.VCodeText = count + 's' + '后重新获取';
        if (count === 0)
        {
          this.VCodeText = '重新获取';
          clearInterval(timer);
        }
      }
    }, 1000);
  }


    GetCode()
    {
        this.Service.GetResetPwdData(this.Form_Group.value.tel).then(res => {
            if(res.code === 1)
            {
                this.times();
  
                return App.ShowToast("发送成功");
            }
            else
            {
              return App.ShowToast(res.msg)
            }
        })
        .catch(err => App.ShowToast(err.msg));
    }
    
    GetTelCode()
    {
        this.Service.GetFindPwdData(this.Form_Group.value.tel,this.Form_Group.value.VCode)
    }

    get FindDisabled(): boolean
    {
      if (this.tel.invalid || this.VCode.invalid) return true;
      return false;
    }


 


    Form_Group: FormGroup;
    tel: FormControl;
    VCode: FormControl ;
    HeadTitle: string = '找回密码'
    VCodeText: string = '获取验证码';
}