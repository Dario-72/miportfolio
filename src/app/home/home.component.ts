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

var str =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimuseligendi, cupiditate eaque quis totam cumque, quidem delectus laborum maiores ipsa molestiae autem itaque, rem beatae. In aut voluptatum tenetur sint.';
var split = str.split('');
var counter = 0;

var SI = setInterval(function () {
  var p = $('p');
  p.append(split[counter]);
  counter++;
  if (counter == str.length) {
    clearInterval(SI);
  }
}, 90);
