import { Component } from '@angular/core';
import {DatabaseServicesService} from "../services/database-services.service";

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent {
  records:any[] = [];
  constructor (private dbService : DatabaseServicesService){
    this.getList();
  }
  getList(){
    this.dbService.getEventCat().subscribe({
      next:(data:any)=>{
        this.records=data;
    },error:(error) => {console.log(error)}
    })
  }}
