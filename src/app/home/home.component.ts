import { Component } from '@angular/core';
import { ProgressServiceService } from '../progress-service.service';

import { NavbarComponent } from '../home-comp/navbar/navbar.component';
import { AboutusComponent } from '../home-comp/aboutus/aboutus.component';
import { FooterComponent } from '../home-comp/footer/footer.component';
import { CsmapComponent } from '../home-comp/csmap/csmap.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    AboutusComponent,
    FooterComponent,
    CsmapComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    '../app.component.css',
  ]
})
export class HomeComponent {
  constructor(
    private progressService: ProgressServiceService
  ) {
    console.log(this.progressService.getProgressData());
  }
}
