import { Component, ViewChild ,OnInit } from '@angular/core';
import { HomeService } from '../../../providers/homeservice';
import { AddcreditsPage } from '../../home/addcredits/index';
import { AdddepositPage } from '../../home/adddeposit/index';
import * as Types from '../../../providers/types';
import { TAuthService } from '../../../providers/auth';
import {NavController} from 'ionic-angular/navigation/nav-controller';
import { TabsPage } from '../../tabs/index';


@Component({
  selector: 'page-mycard',
  templateUrl: 'index.html'
})



export class MycardPage implements OnInit
{
 
  App = window.App;
  constructor(public Servie: HomeService, private Auth: TAuthService, public navCtrl: NavController) {
    if (App.UserInfo.idAuthed !== '1')
    {
      App.Nav.push(App.RootPage.NoldentifyPage);
    }
    
  }

  ngOnInit()
  {
    this.CreditCarts = new Array<Types.CardOptions>();
    this.DepositCards = new Array<Types.CardOptions>();

    this.Servie.GetCardList().then(res =>
    {
      for (let item of res)
      {
        if (item.type === '0')
        {
          this.CreditCarts.push(item)
        }
        else
        {
          this.DepositCards.push(item)
        }
      }
    });
  }

  DelCreditCards(cardId)
  {
    this.Servie.DelCard(cardId).then(res => {
      this.CreditCarts.splice(this.CreditCarts.indexOf(cardId), 1)
        if (res)
        {
          App.ShowToast('信用卡删除成功');
          App.CurrentCreditCards = {};
          this.Auth.GetUserData();
        }
        else
        {
          App.ShowError('信用卡删除失败');
        }

    })
  }

  DelDepositCards(cardId)
  {
    this.Servie.DelCard(cardId).then(res => {
      this.DepositCards.splice(this.DepositCards.indexOf(cardId), 1)
        if (res)
        {
          App.ShowToast('储蓄卡删除成功');
          App.CurrentDepositCard = {};
          this.Auth.GetUserData();
        }
        else
        {
          App.ShowError('信用卡删除失败');
        }

    })
  }

  AddCards()
  {
      App.Nav.push(AddcreditsPage);
  }

  TabsIndex()
  {
    this.navCtrl.parent.select(3);
  }

  SwitchTabs(n:number)
  {
    this.ActiveIndex = n;
  }

  HeadTitle: string = "我的卡片";
  CreditCarts: Array<Types.CardOptions>;
  DepositCards: Array<Types.CardOptions>;
  ActiveIndex = 0;
}
