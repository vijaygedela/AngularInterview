import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { HeaderComponent } from './header/header.component';
import { AccountTransferComponent } from './account-transfer/account-transfer.component';
import { UpiComponent } from './upi/upi.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareersComponent } from './careers/careers.component';
 

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    HeaderComponent,
    AccountTransferComponent,
    UpiComponent,
    CardPaymentComponent,
    HomeComponent,
    AboutUsComponent,
    CareersComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
