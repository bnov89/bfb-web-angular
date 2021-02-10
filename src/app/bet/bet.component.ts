import {Component, OnInit} from '@angular/core';
import {Bet, Match, MatchService} from '../match.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.scss']
})
export class BetComponent implements OnInit {
  panelOpenState = false;
  private betsList: Bet[];
  private matchToBet: Match;
  matches: any;
  matchId: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
  homeTeamName: string;
  awayTeamName: string;

  constructor(private matchService: MatchService, private router: Router) {
  }

  ngOnInit() {
    // this.matches = [
    //   {
    //     homeTeamId: 'Pomorzanka Sejny',
    //     awayTeamId: 'Rudnia Zabłudów',
    //     id: 1
    //   },
    //   {
    //     homeTeamId: 'Inter Mediolan',
    //     awayTeamId: 'Lech Poznań',
    //     id: 2
    //   }
    // ];
    // this.matchToBet = {
    //   homeTeamId: 'Pomorzanka Sejny',
    //   awayTeamId: 'Rudnia Zabłudów',
    //   id: 1
    // };
    // this.betsList = this.matchService.getBetsByMatchId(this.matchToBet.id);
    this.matchService.getAllMatches().subscribe(value => this.matches = value);
  }

  saveBet() {
    this.matchService.saveBet({
      id: null,
      matchId: this.matchId,
      homeTeamGoals: this.homeTeamGoals,
      awayTeamGoals: this.awayTeamGoals
    });
    // this.router.navigateByUrl('/bets');
  }
}
