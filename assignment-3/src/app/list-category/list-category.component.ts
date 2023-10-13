import { Component } from '@angular/core';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent {
  records = [
    { id: 1, name: 'Category 1', creationDate: '2023-10-13', description: 'Description for Category 1', image: 'category1.jpg' },
    { id: 2, name: 'Category 2', creationDate: '2023-10-14', description: 'Description for Category 2', image: 'category2.jpg' },
  ];
}
