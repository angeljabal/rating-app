import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RatingPageComponent } from './rating-page/rating-page.component';
import { RatingsService } from './rating-page/ratings.service';

@NgModule({
  declarations: [
    AppComponent,
    RatingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    RatingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
