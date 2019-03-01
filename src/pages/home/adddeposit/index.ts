import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomeService } from '../../../providers/homeservice';
import { TypeInfo } from '../../../UltraCreation/Core/TypeInfo';
import { TAuthService } from '../../../providers/auth';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-adddeposit',
  templateUrl: 'index.html'
})
export class AdddepositPage implements OnInit
{
  App = window.App;
  constructor(public Service: HomeService, public navParams: NavParams, private Auth: TAuthService) { }

  ngOnInit()
  {
    if(!TypeInfo.Assigned(App.UserInfo)) return;
    this.GetIdCard(App.UserInfo['idCardNo']);

    this.Form_Group = new FormGroup({
      CardNo: this.CardNo = new FormControl('', [
        Validators.required,
        Validators.minLength(16)
      ]),

      Mobile: this.Mobile = new FormControl('', [
        Validators.required,
        Validators.pattern(/^1[3|4|5|7|8][0-9]{9}$/)
      ])
    });
  }

  DelCard()
  {
    this.Service.GetCardList().then(res => {
      for (let i = 0; i < res.length; i ++)
      {
        if (res[i].type === '1')
        {
          this.Service.DelCard(res[i].id).then(res => {
            console.log(res)
          })
        }
      }
    })
  }

  get CompleteBtnIsDisabled(): boolean
  {
    if (this.CardNo.invalid || this.Mobile.invalid) return true;
    return false;
  }

  GetIdCard(IdNo)    //验证身份证
  {
    this.ShowId = IdNo.substr(0, 6);
    for (let i = 0; i < (IdNo.length - 10); i ++)
    {
      this.ShowId += '*'
    }
    this.ShowId += IdNo.substr(-4);
  }


  ClickOpenBank()
  {
    if (this.CardNo.invalid)
    {
      return App.ShowError('请先输入银行卡卡号');
    }
    App.ShowModal(App.RootPage.ListofbankPage).then((modal) =>
    {
      modal.onDidDismiss(data => {
        if (data)
        {
          this.BankName = data.name;
          this.BankCode = data.code;
          this.BranchCode = '';
          this.BranchName = '请选择具体开户支行';
        }
      });
    })
  }

  ClickBranchBank()
  {
    if (!this.BankCode)
    {
      return App.ShowError('请先选择开户银行');
    }
    App.ShowModal(App.RootPage.BranchcardPage, {Bank: this.BankName, Code: this.BankCode}).then((modal) =>
    {
      modal.onDidDismiss(data => {
        if (data)
        {
          this.BranchName = data.name;
          this.BranchCode = this.BankCode;
          this.TranCode = data.bankCode;
        }
      });
    })
  }



  Finish()
  {
    this.DelCard();
    this.Service.AddDeposiCard(this.Form_Group.value.CardNo, this.BankName,
      this.TranCode, this.BranchName, this.Form_Group.value.Mobile).then(res => {
        if (res)
        {
          App.ShowToast('储蓄卡添加成功!');
          this.Auth.GetUserData();
          App.Nav.push(App.RootPage[this.navParams.data]);
        }
      })
  }


  HeadTitle: string = "添加储蓄卡";
  ShowId: string;
  BankName: string = '请选择开户银行';
  BankCode: string = '';
  BranchName: string = '请选择具体开户支行';
  BranchCode: string = '';
  TranCode: string = '';
  KeyWord: string;
  BranchList: Array<any> = [];
  

  Form_Group: FormGroup;
  CardNo: FormControl;
  Mobile: FormControl;
}
