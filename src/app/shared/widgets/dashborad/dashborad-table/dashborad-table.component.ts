import { Component, OnInit, Input } from '@angular/core';
import { TableData } from 'src/app/models/table-data';

@Component({
  selector: 'app-dashborad-table',
  templateUrl: './dashborad-table.component.html',
  styleUrls: ['./dashborad-table.component.scss']
})
export class DashboradTableComponent implements OnInit {
  displayedColumns = ['access_count', 'follower', 'likes_count', 'engajiment_rate'];
  @Input() tableData: TableData[];
  constructor() { }

  ngOnInit() {}

}