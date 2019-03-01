import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TBaseService } from '../providers/pub_service';

@Injectable()
export class HomeService extends TBaseService
{
    constructor(public http: Http)
    {
     super(http);
    }

    // 身份证认证
    async VerifyId(idcardNo, name, mobile)
    {
        App.ShowLoading('验证中...')
        const result = await this.Post('kpay/api/idcard/auth?', {idcardNo: idcardNo, name: name, mobile: mobile}).then(res => res.json());
        console.log(result);
        if (result.code === 1)
        {
            App.HideLoading();
            return true;
        }
        else
        {
            App.HideLoading();
            return false;
        }
    }

    // 获取当日分润明细
    async GetProfitToday()
    {
        let result = await this.Post('kpay/api/user/myprofit/today').then(res => res.json());
        if (result.code === 1)
        {
            return result.data;
        }
        else
        {
            return [];
        }
    }

    // 获取银行卡列表
    async GetCardList()
    {
        const result = await this.Post('kpay/api/bankcard/list').then(res => res.json());
        // console.log(result);

        if (result.code === 1)
        {
            return result.data;
        }
        else
        {
            App.ShowError(result.msg);
            return [];
        }
    }

    // 设置银行卡主卡
    async SetPrimCard(cardId)
    {
        const result = await this.Post('kpay/api/bankcard/setPrimary?', {cardId: cardId}).then(res => res.json());

        console.log(result)
        if (result.code === 1)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    // 添加信用卡
    async AddCreditCard(cardNo, mobile)
    {
        const result = await this.Post('kpay/api/bankcard/addCredit?', {cardNo: cardNo, mobile: mobile}).then(res => res.json());
        console.log(result)
        if (result.code === 1)
        {
                //    App.Nav.push(App.RootPage.CreditCardPage);
            return true;
        }
        else
        {
            App.ShowError(result.msg)
        }
    }

    // 添加储蓄卡
    async AddDeposiCard(cardNo, bankName, bankNo, branchName, mobile)
    {
        const result = await this.Post('kpay/api/bankcard/addDeposit?', 
        {
            cardNo: cardNo,
            bankName: bankName,
            bankNo: bankNo,
            branchName: branchName,
            mobile: mobile
        }).then(res => res.json());

        console.log(result);
        
        if (result.code === 1)
        {
            return true;
        }
        else
        {
            App.ShowError(result.msg)
        }
    }

    // 删除银行卡
    async DelCard(cardId)
    {
        const result = await this.Post('kpay/api/bankcard/del?', {cardId: cardId}).then(res => res.json());
        if (result.code === 1)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    // 获取银行总行信息
    async GetTolBanks()
    {
        const result = await this.Post('kpay/api/bank/info').then(res => res.json());
        console.log(result)
        if (result.code === 1)
        {
            return result.data;
        }
        else
        {
            App.ShowError(result.msg);
        }
    }

    //获取银行支行信息
    async GetBranchBanks(massage)
    {
        const result = await this.Post('kpay/api/bank/list?', {name: massage}).then(res => res.json());
        if (result.code === 1)
        {
            return result.data;
        }
        else
        {
            App.ShowError(result.msg);
        }
    }


    // 取现可用返现券
    async GetAvaCash(amount)
    {
        const result = await this.Post('kpay/api/cash/cashback/available?', {amount: amount}).then(res => res.json());
        if (result.code === 1 && result.data)
        {
            return result.data;
        }
        else
        {
            return [];
        }
    }

    // 获取银行取现列表
    async GetBankPage(cardId, enterCardId, amount, cashbackId?)
    {
        let json = {};
        if (cashbackId)
        {
            json = {
                cardId: cardId,
                enterCardId: enterCardId,
                amount: Math.round(amount * 100),
                cashbackId: cashbackId,
                token: localStorage.getItem('token')
            }
        }
        else
        {
            json = {
                cardId: cardId,
                enterCardId: enterCardId,
                amount: Math.round(amount * 100),
                token: localStorage.getItem('token')
            }
        }
        return await this.Post('kpay/api/trade/quickPay/request?', json)
            .then(res => res.text());
    }

    // 快捷取现获取验证码
    async GetVerifyode(acctNo, cvn2, expDate, mobile, amount, cashbackId?)
    {
        let json = {};
        App.ShowLoading('验证中...')
        if (cashbackId)
        {
            json = {
                acctNo: acctNo,
                cvn2: cvn2,
                expDate: expDate,
                mobile: mobile,
                amount: Math.round(amount * 100),
                cashbackId: cashbackId
            }
        }
        else
        {
            json = {
                acctNo: acctNo,
                cvn2: cvn2,
                expDate: expDate,
                mobile: mobile,
                amount: Math.round(amount * 100)
            }
        }

        const result = await this.Post('kpay/api/trade/quickPay/sendVericode?', json)
            .then(res => res.json());

        if (result.code === 1)
        {
            App.HideLoading();
            App.ShowToast('验证码发送成功')
            return result.data;
        }
        else
        {
            App.HideLoading();
            App.ShowError(result.msg);
        }
    }

    // 快捷取现确认
    async ConfirmResult(orderNo, smsCode)
    {
        App.ShowLoading('确认中...')
        const result = await this.Post('kpay/api/trade/quickPay/confirm?', {orderNo: orderNo, smsCode: smsCode}).then(res => res.json());
        console.log(result)
        if (result.code === 1)
        {
            App.HideLoading();
            return true;
        }
        else if (result.code === 0)
        {
            App.HideLoading();
            App.ShowError(result.msg)
            return false;
        }

    }
}