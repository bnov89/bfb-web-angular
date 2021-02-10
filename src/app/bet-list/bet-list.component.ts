import {Component, OnInit} from '@angular/core';
import {BetService} from '../bet.service';
import {MatchService} from "../match.service";

@Component({
  selector: 'app-bet-list',
  templateUrl: './bet-list.component.html',
  styleUrls: ['./bet-list.component.css']
})
export class BetListComponent implements OnInit {
//  panelOpenState = false;
  betsByMatch: any;
  panelOpenState: boolean[];

  constructor(private betService: BetService, private matchService: MatchService) {
  }

  ngOnInit() {
    this.matchService.getAllMatches().subscribe();
    this.panelOpenState = new Array(this.betsByMatch.length);
    for (let i = 0; i < this.betsByMatch.length; i++) {
      this.panelOpenState[i] = false;
    }
  }


  openBetView() {
    console.log('openBetView');
  }
}
