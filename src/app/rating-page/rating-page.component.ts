import { Component, OnInit } from '@angular/core';
import { RatingsService } from './ratings.service';

@Component({
  selector: 'rating-page',
  templateUrl: './rating-page.component.html',
  styleUrls: ['./rating-page.component.css']
})

export class RatingPageComponent{
  ratings;
  title = 'My Name (2021)'
  selectedRating = 0

  constructor(service: RatingsService){
    this.ratings = service.getRatings()
  }

  ratingSelect(value:number): void{
      this.ratings.filter( (rating) => {
        if (rating.id <= value){
          rating.class = 'btn fa fa-star star-hover selected';
        }else{
          rating.class = 'btn fa fa-star star-hover unselected';
        }
        return rating;
      });

    this.selectedRating = value;
  }
}
