import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-dashborad-graph',
  templateUrl: './dashborad-graph.component.html',
  styleUrls: ['./dashborad-graph.component.scss']
})
export class DashboradGraphComponent implements OnInit {
  chartOptions: {};
  chartPieOptints: {};
  Highcharts = Highcharts;
  @Input() areaChartData: any =[];
  @Input() pieChartData: any =[];

  constructor() { }

  ngOnInit() {
    this.chartOptions = 
      {
        chart: {
            type: 'area'
        },
        title: {
            text: '月時別推移'
        },
        tooltip: {
            split: true,
        },
        plotOptions: {
          area: {
              pointStart: 1,
              marker: {
                  enabled: false,
                  symbol: 'circle',
                  radius: 2,
                  states: {
                      hover: {
                          enabled: true
                      }
                  }
              }
          }
      },
        series: this.areaChartData
    };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300)

    this.chartPieOptints = 
    {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'フォロワー分布'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false
              },
              showInLegend: true
          }
      },
      series: this.pieChartData
    };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
}
