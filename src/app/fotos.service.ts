import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  public fotos:any[] = [
    {
    nombre:"beto",
    img:"../../assets/retrato/beto.jpg"

  },
  {
    nombre:"beto",
    img:"../../assets/retrato/beto.1.jpg"

  },
  {
    nombre:"beto",
    img:"../../assets/retrato/betito-c.jpg"

  },
  {
    nombre:"beto",
    img:"../../assets/retrato/betito.2.jpg"

  },
  {
    nombre:"Beto",
    img:"../../assets/retrato/Beto2.jpg"

  },
  {
    nombre:"beto",
    img:"../../assets/retrato/betito.1.jpg"

  },
  {
    nombre:"Yolo",
    img:"../../assets/retrato/yolo-tierra.jpg"

  },
  { 
    nombre:"Yolo",
    img:"../../assets/retrato/yolo-ojo.jpg"

  },
  {
    nombre:"Yolo",
    img:"../../assets/retrato/yolo-chamarra.jpg"

  },
  {
    nombre:"Gibran",
    img:"../../assets/retrato/DSC_2281.jpg"

  },
  {
    nombre:"Gibran",
    img:"../../assets/retrato/1.jpg"

  },
  { 
    nombre:"Gibran",
    img:"../../assets/retrato/DSC_2360.jpg"

  },
  {
    nombre:"Diosy",
    img:"../../assets/retrato/Diosy.jpg"

  },
  {
    nombre:"Diosy",
    img:"../../assets/retrato/hn1.jpg"

  },
  {
    nombre:"Diosy",
    img:"../../assets/retrato/hn2.jpg"

  },
  
  
];
  public fotosProducts:any[]= [
    {
      nombre: "algo",
      img:"../../assets/producto/hot-cakes.jpeg"
    },
    {
      nombre: "algo",
      img:"../../assets/producto/cochinita.jpg"
    },
    {
      nombre: "algo",
      img:"../../assets/producto/amsterdam.jpg"
    }
  ];
  constructor() {
    console.log('servicio para fotos listo!');
    
   }
  getFotosRetrato(){
    return this.fotos
  }
  getFotosProducto(){
    return this.fotosProducts
  }
}
