import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  status$: Observable<any[]>;
  tickets: any;

  constructor(private router: Router, private afs: AngularFirestore) {
  }

  ngOnInit() {
    this.status$ = this.afs.collection('/status', ref => ref.orderBy('order')).valueChanges();
    this.status$.subscribe(statuses => {
      this.tickets = {};
      statuses.forEach(status => {
        this.tickets[status.id] = this.afs.collection('/ticket', ref => ref.where('status', '==', status.id)).valueChanges();
      });
    });
  }

  ngOnDestroy() {
  }

  allowDrop(event) {
    event.preventDefault();
  }

  drop(event) {
    event.preventDefault();
    const domId = event.dataTransfer.getData('id'),
      target = event.target,
      dashboardColumn = $(target).parents('div.card.dashboard-column'),
      columnBody = dashboardColumn.children('div.card-body');

    columnBody.append(document.getElementById(domId));
  }

  drag(event) {
    event.dataTransfer.setData('id', event.target.id);
  }

}
