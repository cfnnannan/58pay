import { Component, OnInit } from '@angular/core';
import { MineService } from '../../../providers/mineservice';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-VIPmembers',
  templateUrl: 'index.html'
})

export class VIPmembersPage implements OnInit
{
  App = window.App;
  constructor(private Service: MineService) {
    this.GetVipDeadLine(10);
  }

  ngOnInit()
  {

    this.Service.GetVipList().then(res => {
      this.VipList = res;
      console.log(res)
      for (let i = 0; i < this.VipList.length; i ++)
      {
        // let len = this.VipList[i].name.length;
        // this.VipList[i].name = this.VipList[i].name.substr(0, len-4);
        if (this.VipList[i].name.indexOf(App.UserInfo['rank']) !== -1)
        {
          this.VipId = this.VipList[i].id;
        }
      }
      this.PayAmount = this.VipList[this.VipIndex].price;
      console.log(this.PayAmount );
    });

    if (App.UserInfo['vip'])
    {
      this.GetVipDeadLine(App.UserInfo['packageDays']);
    }
  }

  ChooseVIP(ind)
  {
    if (this.VipList[ind].name == App.UserInfo['rank']) return;
    this.VipIndex = ind;
    this.PayAmount = this.VipList[ind].price;
  }

  Submit()
  {

    this.Service.BuyVip(this.VipList[this.VipIndex].id).then(res => {
      new InAppBrowser().create(res.qrCode, '_system');
    })

  }


  GetVipDeadLine(days: number)//number
  {
    const TDate = new Date().getTime();
    let stamp = days * 864e5;
    let DeadStamp = TDate + stamp;
    let DeadTime = new Date(DeadStamp);
    let Year = DeadTime.getFullYear();
    let Month = DeadTime.getMonth() + 1;
    let Day = DeadTime.getDate();
    this.Deadline = Year + '-' + Month + '-' + Day;
  }

  HeadTitle: string = "VIP会员";
  VipIndex: number = 0;
  VipList: Array<any>;
  PayAmount: number;
  Deadline: string;
  VipId: number;
}
