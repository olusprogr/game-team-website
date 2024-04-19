import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public newSubject = new Subject<any>();

  currentRoute: string = '';

  constructor() { }

  public setNavigation(route: string) {
    this.currentRoute = route;
    this.newSubject.next(route);
  }

  public getNavigation(): string {
    return this.currentRoute;
  }
}
