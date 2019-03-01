import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import * as Types from '../../../providers/types';
import { HomeService } from '../../../providers/homeservice';




@Component({
  selector: 'page-changecards',
  templateUrl: 'index.html'
})
export class ChangecardsPage implements OnInit
{

  constructor(public Service: HomeService, public navParams: NavParams) {
  }

  ngOnInit()
  {
    this.BankList = [];
    for (let item of this.navParams.data)
    {
      if (item.primary === '1') item.chose = true;
      this.BankList.push(item);
    }
  }

  
  AddCards()
  {
    App.Nav.push(App.RootPage.AddcreditsPage);
  }

  SelectedCard(item)
  {
        
    // console.log(item.chose)  //undefined
    // console.log(!item.chose)  //true
    
    if (item.chose) return;
    for (let i of this.BankList) i.chose = false;
    item.chose = !item.chose;

    this.Service.SetPrimCard(item.id)
    .then(() => setTimeout(() => App.ActiveView.dismiss(item)))
    .catch((err) => App.ShowError('接口异常...'));

  }

  HeadTitle: string = "我的信用卡";
  private BankList: Array<Types.CardOptions> = [];
}
