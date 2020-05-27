import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicePhpService {
  private url = 'http://localhost:8888/php-mailer/mail.php';
  
  constructor(private http: HttpClient) { }

  peticion(usuario){
      
    const data = {
      nombre: usuario.nombre,
      correo: usuario.correo,
      apellidos: usuario.apellidos,
      phone: usuario.phone,
      comentarios: usuario.comentarios
    };
    return this.http.post(
      `${this.url}`,
      this.getFormData(data)
    ).pipe(resp => {
      console.log(resp);
      return resp;
    });
  }

  getFormData(object) {
    const formData = new FormData();
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    return formData;
  }
}
