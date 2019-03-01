import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TAuthService } from '../../providers/auth';

@Component({
  selector: 'page-modifypwd',
  templateUrl: 'index.html'
})

export class ModifypwdPage implements OnInit
{
    App = window.App;
  constructor(public Service: TAuthService) {
  }

    ngOnInit()
    {
        this.tel = App.UserInfo['mobile'].substr(0,3) + this.tel + App.UserInfo['mobile'].substr(-4);
        this.Form_Group = new FormGroup({
            VCode: this.VCode = new FormControl('', [
                Validators.required,
                Validators.minLength(4)
            ]),
            pwd: this.pwd = new FormControl('', [
                Validators.required,
                Validators.minLength(6)
            ])
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


    GetTelCode()
    {
        this.Service.getPwdVericode(App.UserInfo['mobile']).then(res => {
            if(res.code === 1)
            {
            this.times();
            return App.ShowToast('发送成功');
            }
            else
            {
                return App.ShowToast(res.msg)
            }
        })
        .catch(err => App.ShowToast(err.msg));
    }



    pwdType()      //密码是否可看
    {
        console.log(this.pwdVisible);
        this.pwdVisible = !this.pwdVisible;
        if(this.pwdVisible)
        {
            this.pwdText = 'text';
        }
        else
        {
            this.pwdText = 'password';
        }
    }


    get ConfirmBtnIsDisabled(): boolean
    {
        if(this.VCode.invalid || this.pwd.invalid) return true;
        return false;
    }

    ConfirmModify()
    {
        this.Service.GetchangePsdData(App.UserInfo['mobile'], this.Form_Group.value.pwd, this.Form_Group.value.VCode);
        // App.Nav.push(App.RootPage.LoginPage);
    }


    Form_Group: FormGroup;
    VCode: FormControl;
    HeadTitle: string = "修改密码";

    private pwd: FormControl;
    private VCodeText: string = '获取验证码';
    private pwdVisible: boolean = false;
    private pwdText: string = 'password';
    private tel: string = "****";
}
