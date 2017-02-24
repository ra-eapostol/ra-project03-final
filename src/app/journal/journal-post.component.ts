import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Journal } from './journal';
import { JournalService } from './journal.service';

import {Observable} from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'app-journal-post',
  templateUrl: './journal-post.component.html',
  styleUrls: ['./journal-post.component.css']
})
export class JournalPostComponent implements OnInit {
  journalEntry: Journal;

  constructor(
		private journalService: JournalService,
		private route: ActivatedRoute,
		private location: Location
    
  	) {}

  ngOnInit(): void {
    this.route.params
        .switchMap((params: Params) => this.journalService.getPost(+params['ID']))
        .subscribe(journal => 
          {
            console.log(journal);
            this.journalEntry = journal;
            console.log(this.journalEntry);
          }
         );



    /*console.log(this.route.params);
    let behaviourSubject = this.route.params;

    let x:any = behaviourSubject.switchMap( 
      
      (v:Params,i:number) => this.journalService.getPost(v['ID'])
  

    )
    console.log("xxxxxxx")
    console.log(x);

    x.subscribe(
      (q:any,v:any) =>{
        console.log('i subscribed');
        console.log(v);
        //console.log(q);
        //this.q = q;
      }

    );*/

    /* 
	this.route.params
		.switchMap(
      
      (params: Params, i:number) => {
        console.log(params['ID']);
        return 
	    //this.journalService.getPost(+params['ID']) ;
    }
      
      )
		.subscribe((a:Journal) => {
      console.log(a);
      //this.post = post;
    });

    console.log(this.post);
*/

  }

  goBack(): void {
	this.location.back();
  }

}
