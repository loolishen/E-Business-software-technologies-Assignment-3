// delete-category.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent {
  categoryId: string = '';
  submitForm(): void {
    // Handle form submission logic here
    console.log('Form submitted. Category ID:', this.categoryId);
    // You can implement your HTTP request to delete the category
  }
}
