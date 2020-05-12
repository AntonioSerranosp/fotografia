import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';


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
    apellido:'',
    telefono: ''
  }

  constructor() { }

  ngOnInit(): void {
  }
  guardar(contacto: NgForm){
   
    console.log(contacto.value);
    console.log(contacto.valid);

    if (contacto.valid == true){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tu información se ha guardado correctamente',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se ha llenado correctamente el formulario',
      })
    }
  }

}
