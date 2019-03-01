import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TypeInfo } from '../UltraCreation/Core/TypeInfo';
import { TBaseService } from './pub_service';


@Injectable()
export class TAuthService extends TBaseService
{

  constructor(public http: Http)
  {
    super(http);
  }

  async judgeLogin()
  {
    if (!this.IsLogin)
    {
      return App.RootPage.StartPage;
    }
    else if (!await this.CheckToken())
    {
      return App.RootPage.StartPage;
    }
    else {
      this.GetUserData();
      return App.RootPage.TabsPage;
    }
  }

  // 登录
  async Login(Tel: number, Password: string)
  {
    const result = await this.Post('kpay/api/login?', {mobile: Tel, password: this.Md5T(Password)}).then(res => res.json());

    if (result.code === 1)
    {
      App.EnableHardwareBackButton();
      localStorage.setItem('token', result.data.token);
      this.GetUserData().then(() => App.Nav.push(App.RootPage.TabsPage));
    }
    else
    {
      App.HideLoading();
      App.ShowError(result.msg);
    }
  }

  //校验找回密码短信验证码
  async GetFindPwdData(tel: number, VCode: string)
  {
    const result = await this.Post('kpay/api/checkPwdVeriCode?',{mobile: tel, veriCode: VCode}).then( res => res.json());
    if(result.code === 1)
    {
      App.Nav.push(App.RootPage.ResetpwdPage, {mobile: tel, code: VCode});
    }
    else
    {
      App.ShowError(result.msg);
    }
  }

  //获取找回密码短信验证码
  async GetResetPwdData(tel: number)
  {
    const result = await this.Post('kpay/api/getPwdVericode?',{mobile: tel}).then( res => res.json());
    console.log(result);

    if(result.code === 1)
    {
      return result;
    }
    else
    {
      App.ShowError(result.msg);
    }
  }



  //修改用户密码
  async GetchangePsdData(tel: number, pwd: string, VCode: string)
  {
    const result = await this.Post('kpay/api/user/changePassword?',{mobile: tel, password: this.Md5T(pwd), veriCode: VCode}).then( res => res.json());
    if (result.code === 1)
    {
      App.ShowToast('更改成功，请重新登陆');
      App.Nav.push(App.RootPage.LoginPage)
    }
    else
    {
      App.ShowError(result.msg);
    }
  }

  //获取修改密码验证码
  async getPwdVericode(mobile)
  {
    const result = await this.Post('kpay/api/getPwdVericode?',{mobile: mobile}).then(res => res.json());
    return result;
  }


  //注册
  async SignIn(Tel: number, Password: string, Code?: string, Recommend?: string)
  {
    let  json = {};
    if (Recommend)
    {
      json = {mobile: Tel, password: this.Md5T(Password), veriCode: Code, referee: Recommend}
    }
    else
    {
      json = {mobile: Tel, password: this.Md5T(Password), veriCode: Code}
    }
    const result = await this.Post('kpay/api/register?', json).then(res => res.json());
    if (result.code === 1)
    {
      App.ShowToast("注册成功,请登陆");
      App.Nav.push(App.RootPage.LoginPage);
    }
    else{
      App.ShowError(result.msg);
    }
  }

  // 获取注册验证码
  async GetVerifyCode(Tel: number)
  {

    const result = await this.Post('kpay/api/getVericode?', {mobile: Tel}).then(res => res.json());
    return result;
  }

  // 验证注册验证码
  async CheckVerifyCode(Tel: number, VCode: string)
  {
    const result = await this.Post('kpay/api/checkRegVeriCode?', {mobile: Tel, veriCode: VCode }).then(res => res.json());
    // return result;
    if (result.code === 1)
    {
      App.Nav.push(App.RootPage.SetPwdPage, {mobile: Tel, code: VCode});
    }
    else
    {
      App.ShowError(result.msg);
    }
  }

  // 退出登陆
  Logout()
  {
    localStorage.removeItem('token');
    App.UserInfo = {};
    App.DisableHardwareBackButton();
    App.Nav.push(App.RootPage.StartPage);


  }

  // 判断登录
  get IsLogin()
  {
    return TypeInfo.Assigned(localStorage.getItem('token'));
  }

  // 校验token有效性
  async CheckToken()
  {
    const result = await this.Post('kpay/api/checkToken').then(res => res.json());
    if (result.code === 1) return true;
    return false;
  }

  // 修改用户信息
  async ModifyUserInfo(json)
  {

    const result = await this.Post('kpay/api/user/modify?', json).then(res => res.json());
    if (result.code === 1)
    {
      App.ShowToast('用户信息修改成功！');
    }
    else
    {
      App.ShowError('result.msg');
    }
  }

  // 获取用户信息
  async GetUserData()
  {
    const result = await this.Post('kpay/api/user/info').then(res => res.json());
    if (result.code === 1)
    {
      result.data.canTrade = '1';
      App.UserInfo = result.data;
      result.data.vip === '1' ? App.IsVip = true : App.IsVip = false;
      result.data.canTrade === '1' ? App.CanTrade = true : App.CanTrade = false;

    }
    else
    {
      App.ShowError(result.msg).then(() => this.Logout());
    }
  }

}
