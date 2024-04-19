import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../navigation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(
    private router: Router,
    private navigationService: NavigationService
  ) {}

  navigateTo(route: string) {
    this.navigationService.setNavigation(route);
  }
}
