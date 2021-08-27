import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { MrktService } from 'src/services/mrkt.service';
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
  private data: any[];
  dates: string[] = [];
  networth_arr: number[] = [];

  map: any = {};
  networth : number = 0.0;
  currnetworth : number = 0.0;
  investVal: number = 0.0;
  cashVal: number = 0.0
  pastTime : string = "Last Week"

  constructor(private mrktService: MrktService) { 
    this.dates = ['Last Week', 'Last Month', 'Last Quarter','YTD'];

    this.data = [{x:7, y:140066.63}, {x: 30, y: 141858.25}, {x: 120, y: 151613.38}, {x: 365, y: 130280.25}];
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Net Worth',
          data: this.data,
          fill: false,
          // xAxisID: 'Date',
          // yAxisID: 'Value',
        }],
        
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

  makePNWCall(){
    this.mrktService.getPNWData(this.pastTime)
      .subscribe( (data:any)=>{
        this.networth = data;
      } )
  }

  makeCNWCall(){
    this.mrktService.getCNWData()
      .subscribe( (data:any)=>{
        this.map =  Object.entries(data);
      } )
  }
}
