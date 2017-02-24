import { NgModule, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map'

import { Journal } from './journal';

@Injectable()
export class JournalApiModule implements OnInit {
	data:any;
	journals: Journal[] = [];
	// url = 'http://portal.helloitscody.com/inhabitent/api/get/94a08da1fecbb6e8b46990538c7b50b2/?params=%5B%7B%22name%22:%22posts_per_page%22,%22value%22:%225%22%7D,%7B%22name%22:%22paged%22,%22value%22:%221%22%7D%5D';
	url = './journal-data.json'
	constructor(private http: Http) { }

	ngOnInit(): void {

		this.http.get(this.url).subscribe(
			(res) => { console.log(res); this.data = res.json() }
			);
		this.populateJournals(this.data);
	}

	populateJournals(obj: Journal) {
		for (let key in obj) {
			if (key !== "count") {
				let journal = {id: obj[key]["ID"],
							   title: obj[key]["title"],
							   author: obj[key]["author"],
							   imageURL: obj[key]["image"] || "no image found",
							   content: obj[key]["content"],
							   date: obj[key]["date"],
							   categories: obj[key]["categories"]
							};
				this.journals.push(journal);
			}

		}
	}
}