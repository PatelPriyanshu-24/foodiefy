import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { sample_foods,sample_tags } from '../data';
import { Tag } from '../shared/models/tag';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { FOOD_BY_ID_URL, FOOD_BY_SEARCH_URL, FOOD_BY_TAG_URL, FOOD_TAG_URL, FOOD_URL } from '../shared/constants/url';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor( private http:HttpClient) { }

  getall(): Observable<Food[]> {
    return this.http.get<Food[]>(FOOD_URL)
  }
   getAllFoodBySearchTerm(searchTerm:string):Observable<Food[]>{
    return this.http.get<Food[]>(FOOD_BY_SEARCH_URL + searchTerm)
   }

   getalltag(): Observable<Tag[]>{
     return this.http.get<Tag[]>(FOOD_TAG_URL)
   }

   getallfoodbytag(tag:string):Observable<Food[]>{
     return  tag =="All"?
     this.getall():
     this.http.get<Food[]>(FOOD_BY_TAG_URL + tag)
   }

   getfoodbyid(foodId:string):Observable<Food>{
      return this.http.get<Food>(FOOD_BY_ID_URL + foodId)
   }
}

