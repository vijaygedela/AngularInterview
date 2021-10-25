import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountTransferComponent} from './account-transfer/account-transfer.component';
import {CardPaymentComponent} from './card-payment/card-payment.component';
import {UpiComponent} from './upi/upi.component';
import {HomeComponent} from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {CareersComponent} from './careers/careers.component'


const routes: Routes = [
  { path: '', component: AccountTransferComponent},
  { path: 'accountTransfer', component: AccountTransferComponent},
  { path:'cardPayment',component:CardPaymentComponent},
  { path:'upi',component:UpiComponent},
  { path:'home',component:HomeComponent},
  { path:'about',component:AboutUsComponent},
  { path:'careers',component:CareersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
