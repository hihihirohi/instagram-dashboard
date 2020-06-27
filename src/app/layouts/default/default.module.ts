import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material';
import { AccountComponent } from 'src/app/modules/account/account.component';
import { TemplateComponent } from 'src/app/modules/template/template.component';
import { OfferComponent } from 'src/app/modules/offer/offer.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    AccountComponent,
    TemplateComponent,
    OfferComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule
  ]
})
export class DefaultModule { }
