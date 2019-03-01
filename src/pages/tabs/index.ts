import { Component, ViewChild } from '@angular/core';


@Component({
  templateUrl: 'index.html'
})

export class TabsPage
{
  App = window.App;
  tab1Root =  App.RootPage.HomePage;
  tab2Root =  App.RootPage.LoanPage
  tab3Root =  App.RootPage.ApplycardPage;
  tab4Root =  App.RootPage.UcenterPage;

  constructor() {
  
  }


}
