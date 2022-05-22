import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
/* Texto acerca de mi */
var str =
  'Soy una persona que intenta ser buen hijo, buen padre, buen hermano, buen tio, buen amigo. Vengo de una familia numerosa, por eso me gusta estar rodeado de gente que quiero. Siempre me gusto la informatica en general y a esta altura de mi vida, decidi dedicarle tiempo. Creo que me queda mucho camino por recorrer, pero estoy en la direccion correcta y tengo el empuje para recorrerlo.';
var split = str.split('');
var counter = 0;

var SI = setInterval(function () {
  var p = $('p');
  p.append(split[counter]);
  counter++;
  if (counter == str.length) {
    clearInterval(SI);
  }
}, 30);
