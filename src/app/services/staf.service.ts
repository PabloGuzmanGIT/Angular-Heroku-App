import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StafService {

  constructor( private http: HttpClient) { }
  // Se crea la conexion a la base de datos via php link
  stafSelect(){
    const ruta = "https://sampledb-ep1.000webhostapp.com/cheflist.php";
    return this.http.get(ruta);
  }
}