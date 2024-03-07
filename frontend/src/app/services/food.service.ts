import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { sample_foods,sample_tags } from '../data';
import { Tag } from '../shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getall():Food[]{
    return sample_foods
  }
   getAllFoodBySearchTerm(searchTerm:string){
    return this.getall().filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()))
   }

   getalltag():Tag[]{
     return sample_tags
   }

   getallfoodbytag(tag:string):Food[]{
     return  tag =="All"?
     this.getall():
     this.getall().filter(food=>food.tags?.includes(tag))
   }

   getfoodbyid(foodId:string):Food{
      return this,this.getall().find(food=>food.id==foodId) ?? new Food();
   }
}

