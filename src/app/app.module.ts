import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {SeeyouService} from './seeyou.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAeRwm5up-QftBq-nV_kcwq3LuM_Zn1Qs0'
    })
  ],
  providers: [SeeyouService],
  bootstrap: [AppComponent]
})
export class AppModule { }
