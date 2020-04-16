import {Component, OnInit} from '@angular/core';
import {MatchService, Team} from '../match.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  teamList: Team[];
  chosenHomeTeam: string;
  chosenAwayTeam: string;

  constructor(private matchService: MatchService) {
    this.teamList = matchService.getAllTeams();
  }

  ngOnInit() {
  }

  save() {
    this.matchService.addMatch({
      id: null,
      homeTeamName: this.chosenHomeTeam,
      awayTeamName: this.chosenAwayTeam
    });
  }
}
