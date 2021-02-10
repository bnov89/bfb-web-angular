import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";


export interface Match {
  id?: number;
  homeTeamId: number;
  awayTeamId: number;
}

export interface Bet {
  id?: number;
  matchId: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export interface Team {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  matchToBet: Match;

  teamList: Team[] = [
    {
      id: 1,
      name: 'Pomorzanka Sejny'
    },
    {
      id: 2,
      name: 'Sparta Augustów'
    },
    {
      id: 3,
      name: 'Polonia Raczki'
    },
    {
      id: 4,
      name: 'Rudnia Zabłudów'
    },
  ];

  // matchList: Match[] = [
  //   {
  //     id: 1,
  //     awayTeamId: 'Pomorzanka Sejny',
  //     homeTeamId: 'Rudnia Zabłudów'
  //   },
  //   {
  //     id: 2,
  //     awayTeamId: 'Sparta Augustów',
  //     homeTeamId: 'Polonia Raczki'
  //   }
  // ];

  betsList: Bet[] = [
    {
      id: 1,
      awayTeamGoals: 1,
      homeTeamGoals: 2,
      matchId: 1
    },
    {
      id: 2,
      awayTeamGoals: 3,
      homeTeamGoals: 2,
      matchId: 1
    },
    {
      id: 3,
      awayTeamGoals: 4,
      homeTeamGoals: 4,
      matchId: 2
    },
    {
      id: 4,
      awayTeamGoals: 1,
      homeTeamGoals: 1,
      matchId: 2
    },
    {
      id: 5,
      awayTeamGoals: 3,
      homeTeamGoals: 0,
      matchId: 2
    }];

  constructor(private httpClient: HttpClient) {
  }

  getAllTeams() {
    return this.teamList;
  }

  getAllMatches() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('bartek:nowak')
      })
    };
    return this.httpClient.get('http://localhost:8080/matches', httpOptions);
  }

  getMatchById(matchId: number) {
    // const matches = this.matchList.filter(match => match.id === matchId);
    // if (matches.length > 0) {
    //   return matches[0];
    // }
    return null;
  }

  setMatchToBet(matchToBet: Match) {
    this.matchToBet = matchToBet;
  }

  addMatch(homeTeamId: number, awayTeamId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('bartek:nowak')
      })
    };
    this.httpClient.post('http://localhost:8080/matches', {homeTeamId, awayTeamId}, httpOptions).subscribe(value => console.log(value));
  }

  addTeam(teamToAdd: Team) {
    this.httpClient.post('localhost:8080', teamToAdd);
    this.teamList.push(teamToAdd);
  }


  getMatchToBet() {
    return this.matchToBet;
  }

  getBetsByMatchId(matchId: number) {
    return this.betsList.filter(bet => bet.matchId === matchId);
  }

  saveBet(bet: Bet) {
    bet.id = this.betsList.length;
    this.betsList.push(bet);
  }
}
