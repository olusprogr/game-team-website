import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonService } from '../../json-service';

@Component({
  selector: 'app-csmap',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './csmap.component.html',
  styleUrl: './csmap.component.css'
})
export class CsmapComponent {
  updates: {} = {}
  test = [
    "test1",
    "test2",
    "test3"
  ]

  constructor(
    private jsonService: JsonService
  ) {
    this.updates = this.jsonService.getProgressData();
    console.log(this.updates);
    for (let key in this.updates) {
      console.log(key);
    }
    
    this.test.reverse();
  }
}
