import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SwiperComp } from '../UltraCreation/ng-ion/swiper';
import { PageMarqueeComponent } from './component/marquee';
import { PageToolbarComponent } from './component/toolbar';
import { PagePanelComponent } from './component/panel';

@NgModule({
    imports: [
        IonicPageModule
    ],
    declarations: [
        SwiperComp,
        PageToolbarComponent,
        PagePanelComponent,
        PageMarqueeComponent,
    ],
    entryComponents: [

    ],
    exports: [
        SwiperComp,
        PageToolbarComponent,
        PagePanelComponent,
        PageMarqueeComponent,
    ],
})
export class SharedModule
{
}
