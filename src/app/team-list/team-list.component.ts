import { Component, OnInit } from '@angular/core';
import {TeamService} from "../team.service";

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teamList: any;
  displayedColumns: string[] = ['teamName'];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getAllTeams().subscribe((data) => this.teamList = data);
  }

}
