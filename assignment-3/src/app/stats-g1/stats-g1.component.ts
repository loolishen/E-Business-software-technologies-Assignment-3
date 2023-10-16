import { Component } from '@angular/core';
import {DatabaseServicesService} from "../services/database-services.service";

@Component({
  selector: 'app-stats-g1',
  templateUrl: './stats-g1.component.html',
  styleUrls: ['./stats-g1.component.css']
})
export class StatsG1Component {
  records: any[] = [];

  constructor(private dbService: DatabaseServicesService) {
    this.getStats();
  }
  getStats() {
    this.dbService.OperationCount().subscribe({
      next: (data: any) => {
        this.records= data;
      },
      error: (err) => { }
    })
  }
}
