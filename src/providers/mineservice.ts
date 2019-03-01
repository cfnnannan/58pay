import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TBaseService } from '../providers/pub_service';
import { TypeInfo } from '../UltraCreation/Core/TypeInfo';

@Injectable()
export class MineService extends TBaseService
{
  constructor(public http: Http)
  {
    super(http);
  }

  // 获取我的分润
  async MyProfit(keyword, month?)
  {
    let tmp_json;
    if (month)
    {
      tmp_json = {span: keyword, month: month};
    }
    else
    {
      tmp_json = {span: keyword};
    }
    const result = await this.Post('kpay/api/user/myprofit/stati?', tmp_json).then(res => res.json());
    if (result.code === 1)
    {
      return result.data;
    }
    else
    {
      App.ShowError(result.msg);
      App.Nav.pop();
    }
  }

  // 获取分润账户
  async UserProfit()
  {
    const result = await this.Post('kpay/api/user/myprofit').then(res => res.json());
    if (result.code === 1)
    {
      return result.data;
    }
    else
    {
      App.ShowError(result.msg);
      App.Nav.pop();
    }
  }

  //分润账户数据处理
  async GetProfitList(keyword: string, month?: string, len?: number)
  {
    if (TypeInfo.Assigned(month))
    {

      return await this.MyProfit(keyword, month).then(res=>{
        return this.ChartDataProcess(res, len);
      });

    }
    else
    {
      return await this.MyProfit(keyword).then(res =>
      {
        return this.ListDataProcess(res);
      } );
    }
  }

  ChartDataProcess(data: any, len: number)
  {
    let tmp_arr = [];
    if (data.length == 0)
    {
      for (let i = 0; i < len; i ++)
      {
        tmp_arr.push(0);
      }
    }
    else
    {
      for (let i = 1; i < len + 1; i ++)
      {
        let flag = true;
        for (let j = 0; j < data.length; j ++)
        {
          if (data[j].date.substr(-2) == i)
          {
            tmp_arr.push(data[j].profit/100);
            flag = false;
            break;
          }
        }
        if (flag)
        {
          tmp_arr.push(0);
        }
      }
    }
    return tmp_arr;
  }

  ListDataProcess(data: any)
  {
    let tmp_data = []
    if(data.length == 0)
    {
      return tmp_data;
    }
    let tmpMonth = data[0].date.split(' ')[0].substr(0, 7);
    tmp_data = [
      {
        month: tmpMonth,
        total: 0,
        close: false,
        data: []
      }
    ];
    for (let i = 0; i < data.length; i ++)
    {
      let tmpJson = {
        profit: data[i].profit,
        date: data[i].date
      }
      if (tmpMonth == data[i].date.split(' ')[0].substr(0, 7))
      {
        for (let j = 0; j < tmp_data.length; j ++)
        {
          if (tmp_data[j].month == tmpMonth)
          {
            tmp_data[j].data.push(tmpJson);
            tmp_data[j].total += Number(tmpJson.profit);
            break;
          }
        }
      }
      else
      {
        tmpMonth = data[i].date.split(' ')[0].substr(0, 7);
        tmp_data.push({
          month: tmpMonth,
          total: tmpJson.profit,
          close: false,
          data: [tmpJson]
        });
      }
    }
    tmp_data = this.GetBarWidth(tmp_data);
    return tmp_data;
  }

  GetBarWidth(data_arr)
  {
    let max = 0;
    for (let i = 0; i < data_arr.length; i++)
    {
      if (max < data_arr[i].total)
      {
        max = data_arr[i].total;
      }
    }
    for (let i = 0; i < data_arr.length; i++)
    {
      data_arr[i].barWidth = (100-100 * data_arr[i].total/max) + '%';
    }
    return data_arr;
  }

  //获取取现记录列表
  async GetCashList()
  {
    const result = await this.Post('kpay/api/cash/getCashList').then(res => res.json());
    console.log(result);

    if (result.code === 1)
    {
      return result.data;
    }
    else
    {
      App.ShowError(result.msg);
      App.Nav.pop();
    }
  }

  // 获取取现记录详情
  async GetCashDetail(orderId)
  {
    const result = await this.Post('kpay/api/cash/getCashDetail?', {id: orderId}).then(res => res.json());
    if (result.code === 1)
    {
      return result.data;
    }
    else
    {
      App.ShowError(result.msg);
      App.Nav.pop();
    }
  }

  // 获取红包礼券voucher
  async GetVoucherList()
  {
    const result = await this.Post('kpay/api/cash/cashback/list').then(res => res.json());
    if (result.code === 1)
    {
      return result.data;
    }
    else
    {
      App.ShowError(result.msg);
      App.Nav.pop();
    }
  }

  // 获取我的客户
  async GetMyCustomer()
  {
    const result = await this.Post('kpay/api/user/mycustomer').then(res => res.json());
    if (result.code === 1)
    {
      return result.data;
    }
    else
    {
      App.ShowError(result.msg);
      App.Nav.pop();
    }
  }

  // 获取返现记录
  async GetCashBack()
  {
    const result = await this.Post('kpay/api/trade/list').then(res => res.json());
    if (result.code === 1)
    {
      return result.data;
    }
    else
    {
      App.ShowError(result.msg);
      App.Nav.pop();
    }
  }

  // 获取VIP套餐列表
  async GetVipList()
  {
    const result = await this.Post('kpay/api/package/list').then(res => res.json());
    if (result.code === 1)
    {
      return result.data;
    }
    else
    {
      App.ShowError(result.msg);
      App.Nav.pop();
    }
  }

  // 购买Vip
  async BuyVip(id)
  {
    const result = await this.Post('kpay/api/package/buy?', {packId: id}).then(res => res.json());
    if (result.code === 1)
    {
      return result.data;
    }
    else
    {
      App.ShowError(result.msg);
      return false
    }
  }
}

