import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServiciosService } from './recurso/servicios.service';
import { Personaje } from './interfaz/personaje';
import { HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  providers: [ServiciosService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Deber';

  personajes: Personaje[] = [];
  constructor(private recursosService: ServiciosService){
    recursosService. obtenerDatos().subscribe((respuesta:any) => {
      
      // Aquí se asume que la propiedad 'data' contiene un array de objetos con la estructura definida en la interfaz 'Personaje'
      this.personajes = respuesta.data;
      console.log(this.personajes);

    },
    error => {
      console.error('Error al cargar los personajes de Disney:', error);
    })
  }
  
}
