import {Component, OnInit} from '@angular/core';
import {Match, MatchService} from '../match.service';
import {BetComponent} from '../bet/bet.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {

  matchList: Match[];

  constructor(private matchService: MatchService, private betComponent: BetComponent, private router: Router) {
    this.matchList = matchService.getAllMatches();
  }

  ngOnInit() {
  }

  showMatchToBet(matchId: number) {
    const matchById = this.matchService.getMatchById(matchId);
    this.matchService.setMatchToBet(matchById);
    this.router.navigateByUrl('/bet');
  }

}
