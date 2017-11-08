import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dashboard-ticket-overview',
  templateUrl: './ticket-overview.component.html',
  styleUrls: ['./ticket-overview.component.css']
})
export class TicketOverviewComponent implements OnInit, OnDestroy {
  private sub: any;
  ticketId: string;

  constructor(private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.activeRoute.params.subscribe(params => {
      this.ticketId = params['id'];
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
