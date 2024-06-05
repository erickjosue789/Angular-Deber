import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  constructor(private http: HttpClient) { }

  obtenerDatos (){
    return this.http.get('http://api.disneyapi.dev/character')
  }
}
