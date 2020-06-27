import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { DashboradGraphComponent } from './widgets/dashborad/dashborad-graph/dashborad-graph.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatTableModule } from '@angular/material/table';
import { DashboradTableComponent } from './widgets/dashborad/dashborad-table/dashborad-table.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    DashboradGraphComponent,
    DashboradTableComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatTableModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    DashboradGraphComponent,
    DashboradTableComponent
  ]

})
export class SharedModule { }
