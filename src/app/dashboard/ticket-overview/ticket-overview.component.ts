import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { tick } from '@angular/core/testing';
import * as moment from 'moment';

@Component({
  selector: 'dashboard-ticket-overview',
  templateUrl: './ticket-overview.component.html',
  styleUrls: ['./ticket-overview.component.css']
})
export class TicketOverviewComponent implements OnInit, OnDestroy {
  ticket: any = {};
  comment$: Observable<any[]>;

  constructor(private activeRoute: ActivatedRoute, private afs: AngularFirestore) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      const ticketId = params['id'].toLowerCase();
      this.afs.doc('/ticket/' + ticketId).valueChanges().subscribe(ticket => {
        this.ticket = ticket;
      });

      this.comment$ = this.afs.collection('/comment', ref => ref.where('ticket', '==', ticketId).orderBy('created')).valueChanges();
   });
  }

  ngOnDestroy() {
  }

  relative(dateTime: Date) {
    return (moment(dateTime)).fromNow();
  }

}
