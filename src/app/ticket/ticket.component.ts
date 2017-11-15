import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  sub: any;
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
