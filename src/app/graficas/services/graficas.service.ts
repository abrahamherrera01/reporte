import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor( private http: HttpClient) { }

  getUsuarios(){
    return this.http.get('http://localhost:3000/grafica');
  
  }
}


