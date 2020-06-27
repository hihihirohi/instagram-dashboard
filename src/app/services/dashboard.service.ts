import { Injectable } from '@angular/core';
import { TableData } from '../models/table-data';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  areaChart() {
    return [{
      name: 'いいね数',
      data: [
          null, null, null, null, null, 6, 11, 32, 110, 235,
          369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
          20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
          ],
      }, 
      {
      name: 'フォロワー',
      data: [null, null, null, null, null, null, null, null, null, null,
          5, 25, 50, 120, 150, 200, 426, 660, 869, 1060,
          1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538,
          ]
      }
    ]
  }

  pieChart() {
    return [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
          name: '0~999',
          y: 61.41,
      }, {
          name: '1000~3999',
          y: 11.84
      }, {
          name: '4000~6999',
          y: 10.85
      }, {
          name: '7000~9999',
          y: 4.67
      }, {
          name: '10000~19999',
          y: 4.18
      }, {
          name: '20000~',
          y: 7.05
      }]
    }]
  }

  tableData(): TableData[] {
    return [
      {access_count: 30, follower: 100, likes_count: 1079, engajiment_rate: 10.5},
      {access_count: 40, follower: 200, likes_count: 1079, engajiment_rate: 10.5},
      {access_count: 50, follower: 300, likes_count: 1079, engajiment_rate: 10.5},
      {access_count: 60, follower: 400, likes_count: 1079, engajiment_rate: 10.5},
      {access_count: 70, follower: 500, likes_count: 1079, engajiment_rate: 10.5},
    ]
  }
}
