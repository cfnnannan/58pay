
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../providers/homeservice';
import { TypeInfo } from '../../../UltraCreation/Core/TypeInfo';
import * as Types from '../../../providers/types';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'page-creditCard',
  templateUrl: 'index.html'
})

export class CreditCardPage implements OnInit
{

  App = window.App;
  constructor(public Service: HomeService) {

    this.GetCardList();
    this.Way.Rate = App.UserInfo.rate;


  }

  ngOnInit()
  {

  }


  GetCardList()
  {
    this.Service.GetCardList().then(res => {
      if (!TypeInfo.Assigned(res.length) || res.length === 0) return;
      this.CardList = new Array<Types.CardOptions>();
      this.CreditCards = new Array<Types.CardOptions>();
      this.DepositCards = new Array<Types.CardOptions>();

      for (let item of res)
      {
        this.CardList.push(item);

        if (item.type === '0')
        {
          this.CreditCards.push(item);
          if(item.primary === '1') App.CurrentCreditCards = this.CurrentCreditCard = item;
        }

        if (item.type === '1')
        {
          this.DepositCards.push(item);
          this.CurrentDepositCard = item;
          // if(item.primary === '1')
          // {
          //   this.CurrentDepositCard = item;
          // }
        }
      }
    })
    .catch(err => console.log(err));

  }

  InputAmount()
  {
    if (!this.Amount.InputAmount)
    {
      this.Amount.OutputAmount = undefined;
      return;
    }
    this.Amount.OutputAmount = Math.floor((this.Amount.InputAmount * (1 - this.Way.Rate / 100)) * 10) / 10;

  }

  ChoseWay(index)
  {
    this.Way.Type = index;
    if (index === 1)
    {
      this.Way.Rate = App.UserInfo.rate;
      this.InputAmount();
    }
    else
    {
      this.Way.Rate = App.UserInfo.rate1;
      this.InputAmount();
    }
  }

  ConfirmPay()
  {

    let myDate = new Date();
    let myTime = myDate.getHours();
    if (myTime >= 22 || myTime < 9)
    {
      App.ShowToast("交易时间为早九点到晚十点");
      return;
    }

    if ( this.CreditCards.length == 0 || this.DepositCards.length == 0 )
    {
      App.ShowError('请先添加银行卡和储蓄卡');
      return;
    }
    if (this.Way.Type === 1)
    {
      this.Service.GetBankPage(this.CurrentCreditCard.id, this.CurrentDepositCard.id,this.Amount.InputAmount).then(res =>
      {
        // 跳转银联页面
        if(res)
        {
          if(res.indexOf('<html>') == -1)
          {
            let _json = JSON.parse(res);
            App.ShowError(_json.respMsg);
          }
          else {
            App.Nav.push(App.RootPage.FinalpayPage, {innerHtml: res});
          }
        }
        else
        {
          App.ShowError('系统异常，请尝试有积分提现, 或稍后再试');
        }
      })
    }
    else
    {
      App.Nav.push(App.RootPage.CardInforPage, {
        InAmount: this.Amount.InputAmount,
        OutAmount: this.Amount.OutputAmount,
        CreditCard: this.CurrentCreditCard.bank + '(' + this.CurrentCreditCard.cardNo + ')',
        DepositCard: this.CurrentDepositCard.bank + '(' + this.CurrentDepositCard.cardNo + ')',
        Code: this.CurrentCreditCard.id,
        CreditCode: this.CurrentCreditCard.code,
        DepositCode: this.CurrentDepositCard.code,
        Mobile: this.CurrentCreditCard.mobile
      });

      }
  }

  ChangeCard()
  {
    App.ShowModal(App.RootPage.ChangecardsPage,this.CreditCards).then((modal) =>
    {
      modal.onDidDismiss((data) => {
        if (TypeInfo.Assigned(data))
        {
            App.CurrentCreditCards = this.CurrentCreditCard = data;

            this.CreditCards.forEach((item) =>
            {
              if (item.id === data.id)
                  item.primary = '1';
              else
                  item.primary = '0';
            });
        }
      });
    })
  }

  HeadTitle: string = "刷卡提现";

  Amount: AmountOptions = {
    InputAmount: undefined,
    OutputAmount: undefined
  };
  Way: WayOptions = {
    Type: 1
  };

  //所有卡列表
  CardList: Array<Types.CardOptions>;
  //信用卡
  CurrentCreditCard: Types.CardOptions;
  CreditCards = new Array<Types.CardOptions>();
  //储蓄卡
  CurrentDepositCard: Types.CardOptions;
  DepositCards = new Array<Types.CardOptions>();


}

export interface AmountOptions
{
  InputAmount: number;
  OutputAmount: number;
}
export interface WayOptions
{
  Type: number,
  Rate?: number
}
