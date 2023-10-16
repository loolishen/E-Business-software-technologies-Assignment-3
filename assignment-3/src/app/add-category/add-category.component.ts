import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseServicesService } from 'src/app/services/database-services.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  name: string = "";
  categoryID: string = "";
  description: string = "";
  creationDate: any;
  image: string = "";
  alphanumericRegex = /^[a-zA-Z0-9!@#$%^&*()_+=[\]{};':"\\|,.<>/?]+$/;

  constructor(private dbService: DatabaseServicesService, private router: Router) {}

  addCat() {
    if (!this.alphanumericRegex.test(this.name)) {
      this.router.navigate(["/invalid-data"]);
      return;
    }

    this.categoryID = this.IDGenerator();
    let anEventCat = {
      name: this.name,
      eventId: this.categoryID,
      description: this.description,
      creationDate: this.DateGenerator(),
      image: this.image
    };

    this.dbService.addEventCat(anEventCat).subscribe({
      next: (result) => { this.router.navigate(["/list-category"]); },
      error: (error) => { this.router.navigate(["/invalid-data"]); }
    });
  }

  IDGenerator() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = 'C';
    for (let i = 0; i < 2; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    result += '-';
    for (let j = 0; j < 4; j++) {
      const randomDigit = Math.floor(Math.random() * 10);
      result += randomDigit;
    }
    return result;
  }

  DateGenerator() {
    function randomNumberGenerator(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return randomNumberGenerator(1, 30) + " - " + randomNumberGenerator(1, 12) + " - " + randomNumberGenerator(2017, 2023);
  }
}
