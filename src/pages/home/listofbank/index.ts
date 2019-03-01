import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../providers/homeservice';

@Component({
  selector: 'page-listofbank',
  templateUrl: 'index.html'
})

export class ListofbankPage implements OnInit
{
  App = window.App;

  constructor(public Service: HomeService)
  {

  }

  ngOnInit()
  {
    this.Service.GetTolBanks().then(res => {
      this.BankList = res;
    })
  }

  SelectedBank(item)
  {
    App.ActiveView.dismiss({name: item.bankName, code: item.id})

  }

  HeadTitle: string = "选择开户银行";
  BankList: Array<any>
}
