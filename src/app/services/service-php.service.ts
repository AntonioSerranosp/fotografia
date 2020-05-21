import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicePhpService {
  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apikey = 'AIzaSyC4hPVnM9LGTMueU0IPNG-FvFwkls5LoSs';

  constructor(private http: HttpClient) { }

  peticion(usuario){
      
    const data = {
      nombre: usuario.nombre,
      correo:usuario.correo,
      apellido:usuario. apellido,
      telefono: usuario.telefono   
    }
    return this.http.post(
      `${this.url}signInWithPassword?key=${this.apikey}`,
      data
    ).pipe(resp =>{
      return resp
    });
    
}
}
