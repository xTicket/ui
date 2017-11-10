import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../../environments/environment';

import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { TicketOverviewComponent } from './ticket-overview';

@NgModule({
  imports: [
    CommonModule,
    AngularFirestoreModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent, TicketOverviewComponent]
})
export class DashboardModule { }
