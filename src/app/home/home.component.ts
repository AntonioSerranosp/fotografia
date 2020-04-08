import { Component, OnInit } from '@angular/core';
import { FotosService } from '../fotos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _fotosService: FotosService
  ) { }

  ngOnInit(): void {
  }

}
