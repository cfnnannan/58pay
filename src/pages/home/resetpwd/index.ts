import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TAuthService } from '../../../providers/auth';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-resetpwd',
  templateUrl: 'index.html'
})

export class ResetpwdPage implements OnInit
{
  App = window.App;
  constructor(public Service: TAuthService, public navParams: NavParams) {
    this.tel = this.navParams.get('mobile');
    this.VCode = this.navParams.get('code');
  }
  ngOnInit()
  {
   
    this.Form_Group = new FormGroup({
        pwd: this.pwd = new FormControl('', [
            Validators.required,
            Validators.minLength(6)
        ]),
    })
  }


  clickgetlogin()
  {
      if(this.conpwd === this.Form_Group.value.pwd )
      {
        this.Service.GetchangePsdData(this.tel,this.Form_Group.value.pwd, this.VCode);
      }
      else{
        App.ShowError('两次输入密码不一致')
      }
     
  }

  HeadTitle: string = "重置密码"
  Form_Group: FormGroup;
  tel: number;
  VCode: string;
  private conpwd: string;
  private pwd: FormControl;


}