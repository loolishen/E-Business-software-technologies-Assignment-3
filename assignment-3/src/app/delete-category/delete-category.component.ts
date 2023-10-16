// delete-category.component.ts
import { Component } from '@angular/core';
import {DatabaseServicesService} from "../services/database-services.service";
import {Data} from "@angular/router";
@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent {

  records: any[] = [];

  constructor(private dbService: DatabaseServicesService) {
    this.getRecords();
  }

  getRecords() {
    this.dbService.getEventCat().subscribe({
      next: (data: any) => {
        this.records = data;
      },
      error: (err) => { }
    })
  }
  deleteCategory(categoryID: string) {
    this.dbService.deleteEventCat(categoryID).subscribe({
      next: () => {
        this.getRecords();
      },
      error: (err) => { }
    });
  }
}
