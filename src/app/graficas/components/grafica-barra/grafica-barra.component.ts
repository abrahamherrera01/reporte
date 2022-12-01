import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css']
})
export class GraficaBarraComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  
  @Input() horizontal:boolean =false;

  public barChartOptions: ChartConfiguration['options'] = {
   //pone en horizontal indexAxis: 'y',
   //indexAxis: 'y',
    responsive: true,
  };

  public barChartType: ChartType = 'bar';
 
 

  public barChartData: ChartData<'bar'> = {

    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' , backgroundColor: '0000',   },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' , backgroundColor: 'blue',  },
      { data: [ 45, 23, 88, 76, 99, 77, 66 ], label: 'Series c' , backgroundColor: 'gray',  }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }
  
 
  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ];
    this.barChartData.datasets[1].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ];

    this.chart?.update();
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.horizontal);
    if(this.horizontal ==true){ 

      
       
       }
      
  }
 

}
