import { Component, OnInit } from '@angular/core';
import { FotosService } from '../fotos.service';


@Component({
  selector: 'app-portraits',
  templateUrl: './portraits.component.html',
  styleUrls: ['./portraits.component.scss']
})
export class PortraitsComponent implements OnInit {
  
  fotos:any[] = [];

  constructor(
    private _fotosServices:FotosService) { }

  ngOnInit(): void {
    this.fotos = this._fotosServices.getFotosRetrato();
    console.log(this.fotos);
    
    document.querySelectorAll(".photos__item img" ).forEach(el => {
      el.addEventListener("click",function(ev){
        ev.stopPropagation();
        this.parentNode.classlist.add("active");
      })
    })

    document.querySelectorAll(".photos__item img" ).forEach(el => {
      el.addEventListener("click",function(ev){
        this.parentNode.classlist.remove("active");
      })
    })
    
  }

}
