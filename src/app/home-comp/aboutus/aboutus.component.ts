import { Component } from '@angular/core';
import { JsonService } from '../../json-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
  ourTeam: any = {};
  teamMember: any[] = [];

  constructor(
    private jsonService: JsonService
  ) {
    console.log(this.fetchTeamInformation(false) || "TESTING");
  }
  
  private fetchTeamInformation(rtn: boolean = false): any[] | void {
    this.ourTeam = this.jsonService.getTeamInformation();
    this.teamMember = this.ourTeam['members'];
    if (rtn) {return this.teamMember}
  }
}
