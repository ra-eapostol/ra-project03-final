import { Component, OnInit } from '@angular/core';

import { JournalService } from '../journal.service';
import { JournalEntry } from './journalEntry';
// import {$} from 'jquery';
@Component({
  moduleId: module.id,
  selector: 'app-new-journal-entry',
  templateUrl: './new-journal-entry.component.html',
  styleUrls: ['./new-journal-entry.component.css']
})
export class NewJournalEntryComponent implements OnInit {
	public journals: JournalEntry[];
	public entry: JournalEntry;
	public params: string;

  constructor(private journalService: JournalService) { }

  ngOnInit() {
  	this.entry = new JournalEntry();
  }

  submitForm() {
    console.log('submitting...');
  	this.params = '[' + JSON.stringify(this.entry)+']';
  	let parameters = JSON.stringify($("#apiForm").serializeArray());
  	console.log(parameters);
  	this.journalService.postEntry(parameters);
  }


}
