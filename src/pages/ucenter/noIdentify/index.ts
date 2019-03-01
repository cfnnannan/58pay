import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../providers/homeservice';
import { AddcreditsPage } from '../../home/addcredits/index';
import { AdddepositPage } from '../../home/adddeposit/index';
import * as Types from '../../../providers/types';
import { TAuthService } from '../../../providers/auth';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'page-Noldent',
  templateUrl: 'index.html'
})

export class NoldentifyPage implements OnInit
{

  App = window.App;
  constructor(private Service: HomeService) {

  }

  ngOnInit()
  {
    this.Form_Group = new FormGroup({
      Name: this.Name = new FormControl('', [
        Validators.required
      ]),

      IdNo: this.IdNo = new FormControl('', [
        Validators.required,
        Validators.pattern(/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/)
      ])
    });

  }

  get BtnIsDisabled(): boolean
  {
    if (this.Name.invalid || this.IdNo.invalid) return true;
    return false;
  }

  Submit()
  {
    this.Service.VerifyId(this.Form_Group.value.IdNo, this.Form_Group.value.Name, App.UserInfo.mobile).then(res => {
      if (res)
      {
        App.ShowToast('认证成功！');
        setTimeout(() => {
          App.UserInfo['name'] = this.Form_Group.value.Name;
          App.UserInfo['idCardNo'] = this.Form_Group.value.IdNo;
          App.UserInfo['idAuthed'] = '1';
          App.Nav.pop();
        }, 2000);
      }
      else
      {
        App.ShowError('认证失败！')
      }
    })
  }



  HeadTitle: string = "认证";

  Form_Group: FormGroup;
  Name: FormControl;
  IdNo: FormControl;
}
