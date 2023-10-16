import { Component,OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DatabaseServicesService} from "../services/database-services.service";
@Component({
  selector: 'app-display-category',
  templateUrl: './display-category.component.html',
  styleUrls: ['./display-category.component.css']
})
export class DisplayCategoryComponent implements OnInit{
  event: any[] = []
  category: any;

  constructor(private dbService: DatabaseServicesService, private router: ActivatedRoute) {  }
  ngOnInit(): void {
    const categoryID = this.router.snapshot.paramMap.get('id');

    this.dbService.displayEventCat(categoryID).subscribe(
      (categoryResponse: any) => {
        this.category = categoryResponse.category;
        this.event = categoryResponse.event;
      },
      error => {
        console.error('Error in ', error);
      }
    );
  }

}
