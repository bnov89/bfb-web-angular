import { Component, OnInit } from '@angular/core';
import {TeamService} from '../team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teamName: string;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  save() {
    this.teamService.addTeam(this.teamName);
  }
}
