import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions: {};
  Highcharts = Highcharts;
  @Input() data: any =[];

  constructor() { }

  ngOnInit() {
    this.chartOptions = 
      {
        chart: {
            type: 'area'
        },
        title: {
            text: 'DATA'
        },
        subtitle: {
            text: 'HOGE'
        },
        tooltip: {
            split: true,
            valueSuffix: ' millions'
        },
        creadits: {
          enable: false,
        },
        exporting: {
          enable: false,
        },
        series: this.data
    };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300)
  }

}
