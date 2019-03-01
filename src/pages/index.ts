import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import 'Chart.js';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared';
import * as RootPage from '../shared/root';


@NgModule({
    imports: [
        IonicPageModule,
        ChartsModule,
        SharedModule
    ],
    declarations: [
      RootPage.TabsPage,
      RootPage.HomePage,
      RootPage.UcenterPage,
      RootPage.LoginPage,
      RootPage.LoanPage,
      RootPage.NoldentifyPage,
      RootPage.ApplycardPage,
      RootPage.ProfitsPage,
      RootPage.OrdersPage,
      RootPage.RecordsPage,
      RootPage.UinfoPage,
      RootPage.UsetupPage,
      RootPage.CashbackPage,
      RootPage.UsetupPage,
      RootPage.VoucherPage,
      RootPage.MyclientPage,
      RootPage.RegisterPage,
      RootPage.VIPmembersPage,
      RootPage.MycardPage,
      RootPage.InvfriendsPage,
      RootPage.CreditCardPage,
      RootPage.CardInforPage,
      RootPage.FinalpayPage,
      RootPage.ConfirminfoPage,
      RootPage.AddcreditsPage,
      RootPage.ChangecardsPage,
      RootPage.AdddepositPage,
      RootPage.ListofbankPage,
      RootPage.BranchcardPage,
      RootPage.UsevoucherPage,
      RootPage.StartPage,
      RootPage.ModifypwdPage,
      RootPage.FindpwdPage,
      RootPage.ResetpwdPage,
      RootPage.SetPwdPage,
    ],
    entryComponents: [
      RootPage.TabsPage,
      RootPage.HomePage,
      RootPage.UcenterPage,
      RootPage.LoginPage,
      RootPage.LoanPage,
      RootPage.NoldentifyPage,
      RootPage.ApplycardPage,
      RootPage.ProfitsPage,
      RootPage.OrdersPage,
      RootPage.RecordsPage,
      RootPage.UinfoPage,
      RootPage.UsetupPage,
      RootPage.CashbackPage,
      RootPage.UsetupPage,
      RootPage.VoucherPage,
      RootPage.MyclientPage,
      RootPage.RegisterPage,
      RootPage.VIPmembersPage,
      RootPage.MycardPage,
      RootPage.InvfriendsPage,
      RootPage.CreditCardPage,
      RootPage.CardInforPage,
      RootPage.FinalpayPage,
      RootPage.ConfirminfoPage,
      RootPage.AddcreditsPage,
      RootPage.ChangecardsPage,
      RootPage.AdddepositPage,
      RootPage.ListofbankPage,
      RootPage.BranchcardPage,
      RootPage.UsevoucherPage,
      RootPage.StartPage,
      RootPage.ModifypwdPage,
      RootPage.FindpwdPage,
      RootPage.ResetpwdPage,
      RootPage.SetPwdPage,
    ]
})
export class PagesModule
{
}
