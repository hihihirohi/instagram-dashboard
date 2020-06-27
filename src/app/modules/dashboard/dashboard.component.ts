import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  areaChart = [];
  pieChart = [];
  tableData = [];

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.areaChart = this.dashboardService.areaChart();
    this.pieChart = this.dashboardService.pieChart();
    this.tableData = this.dashboardService.tableData();
  }

}
