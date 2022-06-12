import { Component, OnInit } from '@angular/core';
import { ListaService } from './lista.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Ricky & Morty';

  lista:any = null;

  constructor() {}

  ngOnInit() {

  }
}
