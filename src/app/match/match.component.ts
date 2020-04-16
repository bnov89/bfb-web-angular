import {Component, OnInit} from '@angular/core';
import {MatchService, Team} from '../match.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  teamList: Team[];
  chosenHomeTeam: Team;
  chosenAwayTeam: Team;

  constructor(private matchService: MatchService, private router: Router) {
    this.teamList = matchService.getAllTeams();
  }

  ngOnInit() {
  }

  save() {
    this.matchService.addMatch({
      id: null,
      homeTeamName: this.chosenHomeTeam.name,
      awayTeamName: this.chosenAwayTeam.name
    });
    this.router.navigateByUrl('/matchList');
  }
}
