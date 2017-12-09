import { Component, OnInit } from '@angular/core';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html'
})
export class SearchResultsComponent implements OnInit {
	public scrollbarOptions = { axis: 'y', theme: 'dark' };
	public datas = [
		{
			type: "Medical Centers",
			results: [
				{
					name: 'Appollo Hospital',
				},
				{
					name: 'Appollo Hospital Sheshadripuram',
				},
				{
					name: 'Greenview Hospital',
				},
				{
					name: 'St. Johns Hospital',
				},
				{
					name: 'NIMHANS',
				},
				{
					name: 'TradeWings Hospital',
				},
				{
					name: 'Military Hospital',
				},
				{
					name: 'Lakeview Hospital',
				},
				{
					name: 'New land Hospital',
				},
				{
					name: 'Believers Hospital',
				}

			]
		},
		{
			type: 'Locations',
			results: [
				{
					name: 'HSR Layout'
				},
				{
					name: 'Madiwala'
				},
				{
					name: 'White Field'
				},
				{
					name: 'k R Puram'
				},
				{
					name: 'Indira Nagar'
				},
				{
					name: 'Port Blair'
				},
				{
					name: 'Hebbal'
				}
			]
		}
	];
	public dataResults = [
		{
			testName: 'Diabetic Checking',
			firmName: 'Thyrocare Technologies Ltd',
			location: 'HSR Layout',
			price: '$200'
		},
		{
			testName: 'Pressure Check Up',
			firmName: 'Thyrocare Technologies Ltd',
			location: 'Madiwala',
			price: '$100'
		},
		{
			testName: 'Special Checkup',
			firmName: 'Lorem Needs',
			location: 'White Field',
			price: '$80'
		},
		{
			testName: 'Lorem',
			firmName: 'Lorem sdsadasda',
			location: 'White Field',
			price: '$80'
		}
	];
  constructor() { }

  ngOnInit() {
  }

}
