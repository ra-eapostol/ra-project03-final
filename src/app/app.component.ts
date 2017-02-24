import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Journal } from './journal/journal';
import { JournalPostComponent } from './journal/journal-post.component';
import { JournalService } from './journal/journal.service';
import { NewJournalEntryComponent } from './journal/new-journal-entry/new-journal-entry.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  journalPosts: Journal[];
  // constructor(private journalService: JournalService) { }

  ngOnInit() {
  	// this.journalPosts = this.getJournals();
  	console.log(this.journalPosts);
  }

  // getJournals(): Journal[] {
  //   console.log('getting journals');
  //   let journalArray: Journal[] = [];
  // 	this.journalService.getJournals().then(journals => {
  //     console.log(journals);
  //     for (let journal of journals) {
  //       if (typeof journal.image !== "string") { journal.image = "http://img11.deviantart.net/0205/i/2008/078/9/b/i__m_lost_by_theshad0w.png" };
  //       journalArray.push(journal);
  //     }
  //   });
  //   return journalArray;
  // }
}
