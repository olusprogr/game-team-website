import { Component } from '@angular/core';
import { JsonService } from '../json-service';

import { NavbarComponent } from '../home-comp/navbar/navbar.component';
import { AboutusComponent } from '../home-comp/aboutus/aboutus.component';
import { FooterComponent } from '../home-comp/footer/footer.component';
import { CsmapComponent } from '../home-comp/csmap/csmap.component';
import { DiscordStuffComponent } from '../home-comp/discord-stuff/discord-stuff.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    AboutusComponent,
    FooterComponent,
    CsmapComponent,
    DiscordStuffComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    '../app.component.css',
  ]
})
export class HomeComponent {
  constructor(
    private jsonService: JsonService
  ) {
  }
}
