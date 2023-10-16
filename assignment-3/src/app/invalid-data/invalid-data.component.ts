import { Component,inject } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-invalid-data',
  templateUrl: './invalid-data.component.html',
  styleUrls: ['./invalid-data.component.css']
})
export class InvalidDataComponent {
  location = inject(Location);
  back(){
    this.location.back();
  }
}
