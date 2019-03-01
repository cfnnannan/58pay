import { Component } from '@angular/core';
import { MineService } from '../../../providers/mineservice';
import { fail } from 'assert';

@Component({
  selector: 'page-voucher',
  templateUrl: 'index.html'
})


export class VoucherPage
{
  constructor( public service: MineService,)
  {
    this.voucherData();
   
  }

  SwitchTabs(index)
  {
    this.ActiveIndex = index;
  }

  voucherData()
  {
    this.service.GetVoucherList().then(res => this.DataProcess(res))
  }



  DataProcess(data)
  {

    for (let i = 0; i < data.length; i++){
      if (data[i].status == 0)
      {
        this.DataToUse.push(data[i]);   //未使用
      }
      else if (data[i].status == 1)
      {
        this.DataUsed.push(data[i]);    //已使用
      }
      else if (data[i].status == 2)
      {
        this.DataOutDate.push(data[i]);   //已过期
      }
    } 
    if(this.DataToUse.length == 0) this.ToUseEmpty = true;
    if(this.DataUsed.length == 0) this.UsedEmpty = true;
    if(this.DataOutDate.length == 0) this.OutDateEmpty = true;
  }


  public DataToUse: Array<any> = [];   //未使用
  public DataUsed: Array<any> = [];    //已使用
  public DataOutDate: Array<any> = [];   //已过期
  public ActiveIndex: number = 0;
  public HeadTitle:string = "红包礼券";

  public ToUseEmpty:boolean = false;
  public UsedEmpty:boolean = false;
  public OutDateEmpty:boolean = false;


}
