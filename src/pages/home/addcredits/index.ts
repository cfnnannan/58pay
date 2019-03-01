import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomeService } from '../../../providers/homeservice';
import { TypeInfo } from '../../../UltraCreation/Core/TypeInfo';
import { TAuthService } from '../../../providers/auth';
import { NavParams } from 'ionic-angular';


@Component({
  selector: 'page-addcredits',
  templateUrl: 'index.html'
})

export class AddcreditsPage implements OnInit
{
  App = window.App;
  constructor(public Service: HomeService, public navParams: NavParams, private Auth: TAuthService)
  {
    this.GetIdCard(App.UserInfo['idCardNo']);
  }

  ngOnInit()
  {
    this.Form_Group_Card = new FormGroup({
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


  get CompleteBtnIsDisabled(): boolean
  {
    if (this.CardNo.invalid || this.Mobile.invalid) return true;
    return false;
  }

  GetIdCard(IdNo)
  {
    if(TypeInfo.Assigned(IdNo))           //TypeInfo.Assigned(IdNo) 判断数值是否存在
    {
      this.ShowIDCard = IdNo.substr(0, 6);
      for (let i = 0; i < (IdNo.length - 10); i ++)
      {
        this.ShowIDCard += '*'
      }
      this.ShowIDCard += IdNo.substr(-4);
    }
  }

  AddCard()
  {
    this.Service.AddCreditCard(this.Form_Group_Card.value.CardNo, this.Form_Group_Card.value.Mobile).then(res => {
      if (res)
      {
        App.ShowToast('信用卡添加成功');
        this.Auth.GetUserData().then(()=>App.Nav.push(App.RootPage[this.navParams.data]));
        console.log(1313131)
        // App.Nav.push(App.RootPage.CreditCardPage);
      }
      // else
      // {
      //   this.AddWrong = true;
      //   this.WrongMsg = res;
      // }
    })
  }

  // Close()
  // {
  //   this.AddWrong = false;
  // }

  PrePage: string;
  HeadTitle: string = "添加信用卡";
  ShowIDCard: string;
  AddWrong: boolean = false;
  WrongMsg: string = '';
  Form_Group_Card: FormGroup;
  CardNo: FormControl;
  Mobile: FormControl;
  VerifyCode: FormControl;
}
