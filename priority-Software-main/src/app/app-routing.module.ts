import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddressesComponent } from './dashboard/shared/components/addresses/addresses.component';
import { CompanyComponent } from './dashboard/shared/components/company/company.component';
import { CustomerOrdersComponent } from './dashboard/shared/components/customer-orders/customer-orders.component';
import { InvoicesOrdersLinesComponent } from './dashboard/shared/components/invoices-orders-lines/invoices-orders-lines.component';
import { InvoicesComponent } from './dashboard/shared/components/invoices/invoices.component';
import { ItemGroupsComponent } from './dashboard/shared/components/item-groups/item-groups.component';
import { OfficesComponent } from './dashboard/shared/components/offices/offices.component';
import { QuotationsComponent } from './dashboard/shared/components/quotations/quotations.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },

  {
    path: 'dashboard',
    children: [
      {
        path: 'companies',
        component: CompanyComponent,
      },

      {
        path: 'itemGroups',
        component: ItemGroupsComponent,
      },
      {
        path: 'addresses',
        component: AddressesComponent,
      },

      {
        path: 'offices',
        component: OfficesComponent
      },

      {
        path: 'invoices',
        component: InvoicesComponent
      },

      {
        path: 'InvoicesOrders',
        component: InvoicesOrdersLinesComponent
      },
      {
        path: 'quotations',
        component: QuotationsComponent
      },
      {
        path: 'CustomerOrders',
        component: CustomerOrdersComponent
      },
    ],

  },



  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
