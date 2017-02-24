import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { JournalComponent } from './journal/journal.component';
import { JournalPostComponent } from './journal/journal-post.component';
import { AboutComponent } from './about/about.component';
import { FindUsComponent } from './find-us/find-us.component';
import { NewJournalEntryComponent } from './journal/new-journal-entry/new-journal-entry.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'shop', component: ShopComponent},
    {path: 'journal', component: JournalComponent},
	{path: 'journal/newEntry', component: NewJournalEntryComponent},    
    {path: 'journal/:ID', component: JournalPostComponent},    
    {path: 'about', component: AboutComponent},
    {path: 'find', component: FindUsComponent}
];

@NgModule ({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}