import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule, Title } from '@angular/platform-browser'
import { HttpModule } from '@angular/http';

import { CoreModule } from './core/core.module'

import { AppRoutingModule } from './app-routing.module'

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    Title,
    CoreModule,
    AppRoutingModule
  ],
  declarations: [],
  providers: [],
  bootstrap: []
})
export class AppModule { }