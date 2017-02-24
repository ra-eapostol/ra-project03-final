import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Journal } from './journal';
import { JournalService } from './journal.service';
import { NewJournalEntryComponent } from './new-journal-entry/new-journal-entry.component';

@Component({
  moduleId: module.id,
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

  journalEntries: Journal[] = [];
  selectedEntry: Journal;
    // journalEntries;
  // journalService: JournalService;
  constructor(private journalService: JournalService, private router: Router) 
  {
    console.log("creating journal component");
    // this.journalEntries = [];
      // this.journalService = new JournalService();
   }

  ngOnInit(): void {
    // console.log(this);
    // this.getJournals();
  	this.journalEntries = this.getJournals();
    console.log(this.journalEntries);
  }

  onSelect(entry: Journal): void {
    this.selectedEntry = entry;
    console.log(this.selectedEntry);
    this.gotoPost();
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

  gotoPost(): void {
    this.router.navigate(['/journal', this.selectedEntry.ID]);
  }

}
