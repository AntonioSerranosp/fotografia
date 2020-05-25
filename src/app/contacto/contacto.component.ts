import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { ServicePhpService } from '../services/service-php.service';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  //los inputs van antes del constructor
  usuario = {
    nombre:'',
    correo:'',
    apellidos:'',
    phone: '',
    comentarios: ''
  };

  constructor(
    private http: HttpClient,
    private serviciophp: ServicePhpService
  ) { }

  ngOnInit(): void {
  }
  guardar(contacto: NgForm){
   
    console.log(contacto.value);
    if (contacto.valid == true){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tu información se ha guardado correctamente',
        showConfirmButton: false,
        timer: 1500
      });
      this.serviciophp.peticion(contacto.value)
          .subscribe( resp => {
            console.log(resp);
          }, (err => {
            console.log(err);
          }));
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se ha llenado correctamente el formulario',
      });
    }
  }
}
