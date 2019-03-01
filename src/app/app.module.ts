import { NgModule, enableProdMode, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { HttpModule } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MyApp } from './app.component';
import { StatusBar } from '../UltraCreation/Native/StatusBar';
import { SplashScreen } from '../UltraCreation/Native/SplashScreen';
import { PagesModule } from '../pages';
import * as Svc from '../providers';
import { AppShare } from '../providers/app.share';


enableProdMode();

let config = {
  backButtonText: '',
  pageTransitionDelay: 0,
  swipeBackEnabled: false,
  // statusbarPadding: false,
};

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, config),
    TranslateModule.forRoot(),
    PagesModule,
  ],
  bootstrap: [IonicApp],
  declarations: [
    MyApp
  ],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppShare,
    Svc.TApplication,
    Svc.TAuthService,
    Svc.MineService,
    Svc.HomeService,
    Svc.Camera,
    Svc.TCameraService,
    // Svc.AppService,
    // Svc.PublicService,
    // Svc.File,
  ]
})
export class AppModule
{

}

