import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise'

import { Journal } from './journal';
import { JournalEntry } from './new-journal-entry/journalEntry';
import { JournalApiModule } from './journal-api.module';

@Injectable()
export class JournalService {
	private headers = new Headers(
		{'Content-Type': 'application/json',
		'Access-Control-Allow-Origin':'*'
		}
		);
	// private journalUrl = 'http://localhost:4200/journal-data.json';
	private journalUrl = 'http://portal.helloitscody.com/inhabitent/api/get/94a08da1fecbb6e8b46990538c7b50b2/?params=%5B%7B%22name%22:%22posts_per_page%22,%22value%22:%225%22%7D,%7B%22name%22:%22paged%22,%22value%22:%221%22%7D%5D';
	private basicUrl = 'http://portal.helloitscody.com/inhabitent/api';
	private GET = "/get";
	private POST = "/post";
	private token = "/94a08da1fecbb6e8b46990538c7b50b2";

	journalArray: Journal[] = [];
	postURL: string;

	constructor(private http: Http) { 
		console.log("creating journal service");
	};

	getJournals(): Promise<Journal[]> {
		this.journalArray = [];
		return this.http.get(this.journalUrl).toPromise()
				   .then(response => {
				   	let returnedResponse = response.json();
				   	for (let key in returnedResponse) {
				   		console.log(key);

				   		if (returnedResponse[key].hasOwnProperty("ID")){
				   		// if (key !== "count") {

				   			// this.journalArray.push(journal);
				   			this.journalArray.push(returnedResponse[key]);
				   		}
				   		console.log(this.journalArray);
				   	}
				   	return this.journalArray;
				   })
				   .catch(this.handleError);
	}

	/*getPost(ID: string): Promise<Journal> {
		// console.log("id is " + ID);
		return this.getJournals()
				.then(
					journals => 
					{	console.log('getting journal entry...');
						console.log(journals);
						let somePost = post => { 
							console.log(typeof post.ID); // number
							console.log(typeof ID);  // string
							let newPostID:string = (post.ID).toString();
							console.log(typeof newPostID);
							if (newPostID == post.ID){
								console.log(post.ID);
								// return post.ID;
								return post.ID;
							} else {
								return false;
							}
							
						};
						console.log(journals.find(somePost));
						journals.find(somePost);
					}

					)
	}*/

	  getPost(ID: number): Promise<Journal> {
	  
    	return this.http.get(this.journalUrl)
      				.toPromise()
      				.then(response => {
      					let journals = response.json();
      					for(let entry in journals ) {
      						if (journals[entry].ID === ID ) {
      							return journals[entry] as Journal;
      						} else {
      							console.log('nah');
      						}
      					}
      				})
      				.catch(this.handleError);
  		}



	private handleError(error: any): Promise<any> {
    	console.error('An error occurred', error); // for demo purposes only
    	return Promise.reject(error.message || error);
    }

    postEntry(params: string): Promise <JournalEntry> {
    	console.log(params);

    	this.postURL = this.basicUrl + this.POST + this.token + "/?params=" + params;
    	console.log(this.postURL);
    	return this.http
    			.post(this.postURL, params, {headers: this.headers})
    			.toPromise()
    			.then(res => res.json().data)
    			.catch(this.handleError);
    }

}