import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { SharedModule } from '@shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';


@NgModule({
  declarations: [SidebarComponent, DashboardPageComponent],
  imports: [
    SharedModule,
    LayoutModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
