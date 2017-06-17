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
      apiKey: 'AIzaSyD65D-03o4sOsbdt7m0AkmqB1lu-qKW0p8'
    })
  ],
  providers: [SeeyouService],
  bootstrap: [AppComponent]
})
export class AppModule { }
