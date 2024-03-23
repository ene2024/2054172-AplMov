import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor() {}

  ngOnInit(): void{
    
  }

  verdadero: boolean = true;

  title: string = 'Mi nueva pagina';

  hazmeClic(): void{
    alert("Hiciste clic!");
  }

  imgUrl: string = 'https://i.redd.it/7ksiaa4exhh01.gif'

  nombreAlumno: string = '';

}
