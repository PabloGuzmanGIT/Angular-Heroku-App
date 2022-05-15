import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Nosotros2Service {

  constructor( private http: HttpClient) { }
  nosotros2Select(){
    const ruta = "https://sampledb-ep1.000webhostapp.com/cheflist.php";
    return this.http.get(ruta);
  }
}
