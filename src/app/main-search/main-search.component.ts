import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html'
})
export class MainSearchComponent implements OnInit {
	public scrollbarOptions = { axis: 'y', theme: 'minimal-dark' };
  constructor() { }

  ngOnInit() {
  }

}
