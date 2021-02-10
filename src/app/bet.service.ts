import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BetService {

  betsByMatch = [
    {
      homeTeam: 'Pomorzanka Sejny',
      awayTeam: 'Rudnia Zabłudów',
      bets: [
        {
          homeGoals: 1,
          awayGoals: 2
        },
        {
          homeGoals: 4,
          awayGoals: 2
        }
      ]
    },
    {
      homeTeam: 'Sparta Agustów',
      awayTeam: 'Sokół Sokółka',
      bets: [
        {
          homeGoals: 3,
          awayGoals: 3
        },
        {
          homeGoals: 1,
          awayGoals: 1
        }
      ]
    }
  ];

  public getMatches() {
    return this.betsByMatch;
  }

  constructor() {
  }
}
