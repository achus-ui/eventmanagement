import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
		h1 {
			font-size: 23px;
			color: #196764;
			padding: 20px 0;
			margin: 0;
			font-weight: 400;
			text-transform: uppercase;
		}
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
