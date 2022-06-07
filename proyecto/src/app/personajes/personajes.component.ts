import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  personajes: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://rickandmortyapi.com/api/character/1,2,3,4,5,27,8,9,10,12,18,14,15")
    .subscribe(
      result => {
        this.personajes = result;
      },
      error => {
        console.log("Error Garrafal")
      }
    );
  }

}
