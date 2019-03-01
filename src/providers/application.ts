//双击物理返回键推出APP系统
import {Injectable, Injector} from '@angular/core';
import {TAppController} from '../UltraCreation/ng-ion/appcontroller';
import * as RootPage from '../shared/root';
import { TypeInfo } from '../UltraCreation/Core/TypeInfo';
import { Platform, Content } from 'ionic-angular';

declare global
{
    var App: TApplication | undefined;

    interface Window
    {
        App: TApplication | undefined;
    }
}

@Injectable()
export class TApplication extends TAppController
{
    constructor(Injector: Injector)
    {
        super(Injector);
        window.App = this;
        this.Platform.ready().then(() =>
        {
            this.Platform.registerBackButtonAction(() =>
            {
                if (this.HardwareBackButtonDisabled) return;

                if (App.Nav.canGoBack())
                {
                    App.Nav.pop();
                    return;
                }
                if (this.BackButtonPressed)
                {
                  this.Platform.exitApp();
                }
                else
                {
                  this.ShowToast('再按一次退出58付应用');
                  this.BackButtonPressed = true;
                  setTimeout(() => {
                    this.BackButtonPressed = false;
                  }, 2000)
                }
            });

            if(this.IsAndroid)
            {
              window.addEventListener('native.keyboardshow', this.keyboardShowHandler.bind(this));
              window.addEventListener('native.keyboardhide', this.keyboardHideHandler.bind(this));
            }
        });
    }

    keyboardShowHandler(e)
    {

      if(window.scrollY < 100)
          window.scrollTo(0, e.keyboardHeight);

    }

    keyboardHideHandler(e)
    {
      if(window.scrollY != 0)
          window.scrollTo(0, 0);
    }


    DisableHardwareBackButton()
    {
        this.HardwareBackButtonDisabled = true;
    }

    EnableHardwareBackButton()
    {
        this.HardwareBackButtonDisabled = false;
    }

    ShowToast(MsgOrConfig: string | Object): Promise<any>
    {
        if (MsgOrConfig instanceof Object)
            return super.ShowToast(MsgOrConfig);
        else
            return super.ShowToast({message: MsgOrConfig, position: 'middle', cssClass:'toast-default', duration: 1500});
    }

    ShowLoading(MsgOrConfig?: string | Object): Promise<any>
    {
        if (MsgOrConfig instanceof Object)
            return super.ShowLoading(MsgOrConfig);
        else
            return super.ShowLoading({spinner: 'ios-small', content: MsgOrConfig, cssClass: 'loading-default'});
    }

    ShowError(err: any, duration: number = 3000, position: 'top' | 'bottom' | 'middle' = 'middle'): Promise<void>
    {
        return super.ShowError(err, {
            duration: duration, position: position,
            style: 'toast-error',  prefix_lang: 'hint.'});
    }

    get UserFace(): any
    {
      if(TypeInfo.Assigned(localStorage.getItem('imageface'))) {
          return { backgroundImage : 'url(' + localStorage.getItem('imageface') + ')' };
      }
      return null;

    }

    IsReal(page: any)
    {
      if (App.UserInfo.idAuthed !== '1')
      {
        App.Nav.push(App.RootPage.NoldentifyPage);
      }
      else
      {
        App.Nav.push(page);
      }
    }


    get IconFace(): boolean
    {
      if(this.UserFace === null && this.UserInfo.sex === '男') return true;
      return false;
    }

    Content: Content;
    Platform: Platform;
    UserInfo: any = {};
    IsVip: boolean = false;
    CanTrade: boolean = true;
    CurrentCreditCards: any = {};
    CurrentDepositCard: any = {};
    public RootPage: any = RootPage;
    private HardwareBackButtonDisabled = false;
    private BackButtonPressed: boolean = false;

}
