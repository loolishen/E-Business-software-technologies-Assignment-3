// event-form.component.ts
import { Component} from '@angular/core';
import {DatabaseServicesService} from "../services/database-services.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent{
  id:number = 0;
  name: string = "";
  description: string = "";
  image: string = "";
  creationDate: number = 0;
  constructor(private dbService:DatabaseServicesService, private router:Router) {}
  saveCat() {
    let CategoryObj = {
      name : this.name,
      description : this.description,
      image:this.image
    };
    this.dbService.addCategory(CategoryObj).subscribe({
      next : (result) => {this.router.navigate(["list-category"])},
      error:(error) => {console.log(error)}
    })
  }
}
