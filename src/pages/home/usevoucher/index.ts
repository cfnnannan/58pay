import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-usevoucher',
  templateUrl: 'index.html'
})

export class UsevoucherPage
{
  App = window.App;
  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
    this.Voucher = this.navParams.get('Voucher');
    this.SetVoucher();
  }

  SetVoucher()
  {
    for (let i = 0; i < this.Voucher.length; i ++)
    {
      this.Voucher[i].Click = false;
      if (i == 0)
      {
        this.Voucher[i].Click = true;
        this.ChooseId = this.Voucher[i].cashbackId;
      }
    }
    console.log(this.Voucher)
  }

  Choose(index)
  {
    for (let i = 0; i < this.Voucher.length; i++)
    {
      this.Voucher[i].Click = false;
    }
    this.Voucher[index].Click = true;
    this.ChooseId = this.Voucher[index].cashbackId;
  }

  Dismiss()
  {
    this.viewCtrl.dismiss(this.ChooseId);
  }

  Confirm()
  {
    this.Dismiss();
  }

  HeadTitle: string = "使用红包礼券";
  Voucher: Array<any>;
  ChooseId: string = '';
}
