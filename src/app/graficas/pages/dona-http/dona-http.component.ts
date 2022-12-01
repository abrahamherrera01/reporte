import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  constructor( private graficaService :GraficasService) { }

  ngOnInit(): void {
    this.graficaService.getUsuarios().subscribe(data=>{
      console.log(data);
    });
  }

}
