import { Component, OnInit } from '@angular/core';
import { FotosService } from '../fotos.service';

@Component({
  selector: 'app-comercials',
  templateUrl: './comercials.component.html',
  styleUrls: ['./comercials.component.scss']
})
export class ComercialsComponent implements OnInit {

  fotos:any[] = [];

  constructor(
    private _fotosServices:FotosService
  ) { }

  ngOnInit(): void {
    this.fotos = this._fotosServices.getFotosProducto();
    console.log(this.fotos);
  }

}
