import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bigChart = [];

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
  }

}
