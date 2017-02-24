import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

// RECOMMENDED (doesn't work with system.js)
import { CarouselModule } from 'ng2-bootstrap/carousel';
// or
// import { CarouselModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { ShopComponent } from './shop/shop.component';
import { JournalComponent } from './journal/journal.component';
import { JournalPostComponent } from './journal/journal-post.component';
import { NewJournalEntryComponent } from './journal/new-journal-entry/new-journal-entry.component';
import { AboutComponent } from './about/about.component';
import { FindUsComponent } from './find-us/find-us.component';
import { JournalService } from './journal/journal.service';
import { CarouselComponent } from './home/carousel.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    JournalComponent,
    JournalPostComponent,
    NewJournalEntryComponent,
    AboutComponent,
    FindUsComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    CarouselModule.forRoot()
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
