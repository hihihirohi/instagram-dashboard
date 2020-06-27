import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AccountComponent } from './modules/account/account.component';
import { TemplateComponent } from './modules/template/template.component';
import { OfferComponent } from './modules/offer/offer.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
      path: '',
      component: DashboardComponent
      },
      {
      path: 'account',
      component: AccountComponent
      },
      {
      path: 'template',
      component: TemplateComponent
      },
      {
      path: 'offer',
      component: OfferComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
