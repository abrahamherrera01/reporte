import { Component } from '@angular/core';
import { ChartData, Color } from 'chart.js';
import {  ChartEvent, ChartType } from 'chart.js';
 
@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent {

  public doughnutChartLabels: string[] = [ 'Sales', 'otros' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 100] },
      { data: [ 50 ,4] },
     ]
  };

  public doughnutChartType: ChartType = 'doughnut';

 

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
