import {Component, OnInit} from '@angular/core';
import {Bet, Match, MatchService} from '../match.service';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css']
})
export class BetComponent implements OnInit {
  private betsList: Bet[];
  private matchToBet: Match;

  constructor(private mathService: MatchService) {
  }

  ngOnInit() {
    this.matchToBet = this.mathService.getMatchToBet();
    this.betsList = this.mathService.getBetsByMatchId(this.matchToBet.id);
  }
}
