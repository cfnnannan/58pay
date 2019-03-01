import { Component, OnInit } from '@angular/core';
import { MineService } from '../../../providers/mineservice';

@Component({
  selector: 'page-myclient',
  templateUrl: 'index.html'
})

export class MyclientPage implements OnInit
{
  App = window.App;
  constructor( public service: MineService)
  {
    this.GetMyCustomerData();
  }

  ngOnInit()
  {
  }

  SwitchTab(n: number)
  {
    this.TabActive = n;
    this.DataClientShow = this.DataClientTwo;
  }

  GetMyCustomerData()
  {
    this.service.GetMyCustomer().then(res => {
      res.detail.forEach(item => {
        if (item.level == 1)
        {
          this.DataClientOne.push(item);
        }
        else
        {
          this.DataClientTwoLen ++;
          this.DataClientsTwo(item);
        }
      });
      this.ClientsNum = this.DataClientOne.length + this.DataClientTwoLen;
    });

  }

  DataClientsTwo(data)
  {
    let flag = true;
    for (let i = 0; i < this.DataClientTwo.length; i++)
    {
      if (data.parentId == this.DataClientTwo[i].sid)
      {
        flag = false;
        this.DataClientTwo[i].data.push(data);
        break;
      }
    }
    if (flag)
    {
      this.DataClientTwo.push({sid: data.parentId, data: [data]});
    }
  }

  ShowTabTwo(id)
  {
    let flag = true;
    for (let i = 0; i < this.DataClientTwo.length; i++)
    {
      if (id == this.DataClientTwo[i].sid)
      {
        flag = false;
        this.DataClientShow = [this.DataClientTwo[i]];
        break;
      }
    }
    if (flag)
    {
      this.DataClientShow = [{sid: id, data: []}];
    }

    this.TabActive = 1;
  }

  TabActive = 0;
  DataClientOne: Array<any> = [];
  DataClientTwo: Array<any> = [];
  DataClientShow: Array<any> = [];
  DataClientTwoLen: number = 0;
  HeadTitle: string = "我的客户";
  ClientsNum: Number = 0;

}
