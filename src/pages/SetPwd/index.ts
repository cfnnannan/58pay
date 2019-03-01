import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TAuthService } from '../../providers/auth';
import { NavParams } from 'ionic-angular';

@Component({
    selector: 'page-SetPwd',
    templateUrl: 'index.html'
  })
  export class SetPwdPage implements OnInit
{
  App = window.App;
  constructor(public Service: TAuthService, public navParams: NavParams)
  {
    this.Tel = this.navParams.get('mobile');
    this.VCode = this.navParams.get('code');
  }

  ngOnInit()
  {
    this.Form_Group = new FormGroup({
      Pass: this.Pass = new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
    });
  }


  //倒计时
  // times()
  // {
  //   let count: number = 60;
  //   let timer = setInterval(() =>
  //   {
  //     if (count > 0)
  //     {
  //       count --;
  //       this.VCodeText = '已发送' + count + 's';
  //       if (count === 0)
  //       {
  //         this.VCodeText = '重新获取';
  //         this.State = 0;
  //         clearInterval(timer);
  //       }
  //     }
  //   }, 1000);
  // }

  //验证手机号码以及验证码
//   GetVeriyCode()
//   {
//     this.Service.GetVerifyCode(this.Form_Group.value.Tel).then(res =>
//     {
//       if(res.code === 1)
//       {
//         // this.CodeSend = true;
//         this.State = 1;
//         this.times();
//         return App.ShowToast("发送成功");
//       }
//       else
//       {
//         return App.ShowToast(res.msg)
//       }
//     })
//     .catch(err => App.ShowToast(err.msg));
//   }

  PassType()
  {
    console.log(this.PassClear);
    this.PassClear = !this.PassClear;
    if (this.PassClear)
    {
      this.PassWordType = 'text';
    }
    else
    {
      this.PassWordType = "password";
    }
  }
  get ResIsDisabled(): boolean
  {
    if (this.Pass.invalid) return true;
    return false;
  }


  // 注册
 
  OnRegister()
  {
    // if (!this.Agree)
    // {
    //   App.ShowError("同意用户协议才可以注册～");
    //   return;
    // }
    if( this.ConPassWord != this.PassWord)
    {
      App.ShowError("两次输入的密码不一致");
      return;
    }
    this.Service.SignIn( this.Tel ,this.Form_Group.value.Pass, this.VCode,);
  }




  // ChooseAgree()
  // {
  //   this.Agree = !this.Agree;
  // }

    // public State: number = 0;
    // public VCodeText: string = "获取验证码";
    public PassClear: boolean = false;
    public PassWord: string = '';
    public ConPassWord: string = '';
    // public Agree: boolean = true;
    public PassWordType: string = 'password';
    public HeadTitle: string ="设定密码"
    public Tel: number;
    public VCode: string;

    Form_Group: FormGroup;
    Pass: FormControl;
  
}
