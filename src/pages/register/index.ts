import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TAuthService } from '../../providers/auth';

@Component({
  selector: 'page-register',
  templateUrl: 'index.html'
})
export class RegisterPage implements OnInit
{
  App = window.App;
  constructor(public Service: TAuthService)
  {}

  ngOnInit()
  {
    this.Form_Group = new FormGroup({
      Tel: this.Tel = new FormControl('', [
          Validators.required,
          Validators.pattern(/^1[3|4|5|7|8][0-9]{9}$/)
      ]),

      VCode: this.VCode = new FormControl('', [
          Validators.required,
          Validators.minLength(4)
      ]),

    });

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
        this.VCodeText = '已发送' + count + 's';
        if (count === 0)
        {
          this.VCodeText = '重新获取';
          this.State = 0;
          clearInterval(timer);
        }
      }
    }, 1000);
  }

  //验证手机号码以及验证码
  GetVeriyCode()
  {
    this.Service.GetVerifyCode(this.Form_Group.value.Tel).then(res =>
    {
      if(res.code === 1)
      {
        // this.CodeSend = true;
        this.State = 1;
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

 
  NextTable()
  {
    this.Service.CheckVerifyCode(this.Form_Group.value.Tel, this.Form_Group.value.VCode);
  }






    public State: number = 0;
    public VCodeText: string = "获取验证码";
    Form_Group: FormGroup;
    Tel: FormControl;
    VCode: FormControl;
  
}
