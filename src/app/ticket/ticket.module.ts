import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket.routing';
import { TicketComponent } from './ticket.component';

@NgModule({
  imports: [
    CommonModule,
    TicketRoutingModule
  ],
  declarations: [TicketComponent]
})
export class TicketModule { }
