import {Component, OnInit} from '@angular/core';
import {MatchService, Team} from '../match.service';
import {Router} from '@angular/router';
import {TeamService} from "../team.service";

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  teamList: any;
  chosenHomeTeam: Team;
  chosenAwayTeam: Team;

  constructor(private matchService: MatchService, private teamService: TeamService, private router: Router) {
    teamService.getAllTeams().subscribe(value => this.teamList = value);
  }

  ngOnInit() {
  }

  save() {
    this.matchService.addMatch(this.chosenHomeTeam.id, this.chosenAwayTeam.id);
    this.router.navigateByUrl('/matchList');
  }
}
