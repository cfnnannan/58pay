import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { HomeService } from '../../../providers/homeservice';
import { setInterval, setTimeout } from 'timers';

@Component({
  selector: 'page-branchcard',
  templateUrl: 'index.html'
})

export class BranchcardPage implements OnInit
{
  App = window.App;
  constructor(public navParams: NavParams, public Service: HomeService )
  {
  }

  ngOnInit()
  {    
    this.BankName = this.navParams.get('Bank');
    this.BankCode = this.navParams.get('Code');
    this.Service.GetBranchBanks(this.BankName).then(res => {
      this.BranchList = res;
    });

  }

  async GetKey()
  {
    let params = this.BankName + ',' + this.KeyWord;
    this.Service.GetBranchBanks(params).then(res => {
      this.BranchList = res;
    })

  }

 

  SelectedBranch(item)
  {
    App.ActiveView.dismiss({name: item.bankName, bankCode: item.bankCode});
  }

  HeadTitle: string = "选择开户支行";
  BankName: string;
  BankCode: string;
  BranchList: Array<any> = [];
  KeyWord: string;

}
