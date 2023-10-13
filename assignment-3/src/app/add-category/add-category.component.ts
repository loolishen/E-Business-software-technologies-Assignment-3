// event-form.component.ts
import { Component} from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent{
  eventName: string = '';
  description: string = '';
  image: string = '';
  submitForm(): void {
    // Handle form submission logic here
    console.log('Form submitted:', this.eventName, this.description, this.image);
    // You can implement your HTTP request to send form data to the server
  }
}
