import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {Chart, Point} from "chart.js";

@Component({
  selector: 'app-chart',
  template: `
      <canvas #chart width="800" height="400"></canvas>
  `
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('chart')
  private chartRef!: ElementRef;
  private chart!: Chart;
  private data: Point[];

  constructor() {
    this.data = [{x: 1, y: 5}, {x: 2, y: 10}, {x: 3, y: 6}, {x: 4, y: 2}, {x: 4.1, y: 6}];
  }

  ngAfterViewInit(): void {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Net Worth',
          data: this.data,
          fill: false
        }]
      },
      options: {
        responsive: false,
        scales: {
          xAxes: [{
            type: 'linear'
          }],
        }
      }
    });
  }
}

// import { Component, } from '@angular/core';
// import { ChartDataSets, ChartOptions } from 'chart.js';
// import { Color, Label } from 'ng2-charts';

// @Component({
//   selector: 'app-chart',
//   templateUrl: './chart.component.html',
//   styleUrls: ['./chart.component.css']
// })

// export class ChartComponent {

//   chartData: ChartDataSets[] = [
//     { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
//   ];

//   chartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

//   chartOptions = {
//     responsive: true,
//   };

//   chartColors: Color[] = [
//     {
//       borderColor: 'black',
//       backgroundColor: 'rgba(255,255,0,0.28)',
//     },
//   ];

//   chartLegend = true;
//   chartPlugins = [];
//   chartType = 'line';
  
// }