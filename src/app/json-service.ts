import { Injectable } from '@angular/core';
import * as ourTeam from '../assets/team.json';
import * as progressData from '../assets/cs-map-progress/progress.json';


@Injectable({
  providedIn: 'root'
})
export class JsonService {
  ourTeam: {} = ourTeam;
  progressData: {} = progressData;

  constructor() {
    for (let key in ourTeam) {
      if (key == 'our-team') {
        this.ourTeam = ourTeam[key];
      }
    }

    this.progressData = progressData['progress'];
  }

  public getTeamInformation(): {} {
    return this.ourTeam;
  } 

  public getProgressData(): {} {
    return this.progressData;
  }
}
