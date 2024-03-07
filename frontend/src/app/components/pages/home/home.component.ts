import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  food: Food[] = [];

  constructor(
    private foodservice: FoodService,
    activatedRouter: ActivatedRoute
  ) {
    activatedRouter.params.subscribe((params) => {
      if (params.searchTerm)
        this.food = this.foodservice.getAllFoodBySearchTerm(params.searchTerm);
      else if(params.tag)
      this.food=this.foodservice.getallfoodbytag(params.tag)
      else this.food = foodservice.getall();  
    });
  }
  ngOnInit(): void {}
}
