import { Component, OnInit } from '@angular/core';
import { Journal } from '../journal/journal';
import { JournalService } from '../journal/journal.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  journalPosts: Journal[];

  constructor(private journalService: JournalService) { }

  ngOnInit() {
  	this.journalPosts = this.getJournals();
  }

  getJournals(): Journal[] {
		console.log('getting journals');
		let journalArray: Journal[] = [];
		this.journalService.getJournals().then(journals => {
		console.log(journals);
		for (let journal of journals) {
		if (typeof journal.image !== "string") { journal.image = "http://img11.deviantart.net/0205/i/2008/078/9/b/i__m_lost_by_theshad0w.png" };
		journalArray.push(journal);
		}
		});
		return journalArray;
	}

}
