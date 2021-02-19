import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CreditosComponent } from './creditos/creditos.component';
import { dataServices } from './dataservices/data.services';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CreditosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [dataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
