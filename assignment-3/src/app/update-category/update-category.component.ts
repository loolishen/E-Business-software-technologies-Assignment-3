import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Data, Router} from '@angular/router';
import { DatabaseServicesService } from 'src/app/services/database-services.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent {
  id: string = '';
  name: string = '';
  description: string = '';

  constructor(private dbService: DatabaseServicesService, private router: Router) { }

  updateCategory(id: string, name: string, description: string) {
    const categoryData = { id, name, description };
    this.dbService.updateEventCat(categoryData).subscribe({
      next: (result: any) => { this.router.navigate(["/list-category"]) },
      error: (error: any) => {this.router.navigate(["/invalid-data"])}
    });
  }
}
