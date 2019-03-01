import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '../UltraCreation/Native/SplashScreen';
import { StatusBar } from '../UltraCreation/Native/StatusBar';
import * as Svc from '../providers';

@Component({
  template: `<ion-nav #rootNavController [root]="rootPage"></ion-nav>`
})

export class MyApp {
  rootPage: any;

  constructor(App: Svc.TApplication, public Auth: Svc.TAuthService)
  {
    App.Platform.ready().then(() => {
      SplashScreen.show();
      StatusBar.hide();
      StatusBar.overlaysWebView(true);
      if (App.IsIos)
          StatusBar.styleBlackTranslucent();
      else
          // StatusBar.styleBlackTranslucent();
          StatusBar.backgroundColorByHexString('#1d83d2');
          // StatusBar.backgroundColorByHexString('blue');
    })
    .then(() =>
    {
      SplashScreen.hide();
      StatusBar.show();
    })
    .then(() =>
    {
      this.Auth.judgeLogin().then(root => this.rootPage = root);
    });


  }

  ngOnInit()
  {
    
  }


}
