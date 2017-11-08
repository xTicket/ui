import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  allowDrop(event) {
    event.preventDefault();
  }

  drop(event) {
    event.preventDefault();
    var domId = event.dataTransfer.getData("id"),
      target = event.target,
      dashboardColumn = $(target).parents("div.card.dashboard-column"),
      columnBody = dashboardColumn.children("div.card-body");

    columnBody.append(document.getElementById(domId));
  }

  drag(event) {
    event.dataTransfer.setData("id", event.target.id);
  }

}
