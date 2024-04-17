import { Injectable } from '@angular/core';
import * as ourTeam from '../assets/team.json';



@Injectable({
  providedIn: 'root'
})
export class JsonService {
  ourTeam: {} = ourTeam;
  constructor() {
    for (let key in ourTeam) {
      if (key == 'our-team') {
        this.ourTeam = ourTeam[key];
      }
    }
  }

  getTeamInformation(): {} {
    return this.ourTeam;
  } 

  getProgressData(): any {
    // return readJSONFiles(folderPath);
  }
}
