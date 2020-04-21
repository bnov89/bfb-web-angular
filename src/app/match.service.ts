import {Injectable} from '@angular/core';


export interface Match {
  id: number;
  homeTeamName: string;
  awayTeamName: string;
}

export interface Bet {
  id: number;
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

  matchList: Match[] = [
    {
      id: 1,
      awayTeamName: 'Pomorzanka Sejny',
      homeTeamName: 'Rudnia Zabłudów'
    },
    {
      id: 2,
      awayTeamName: 'Sparta Augustów',
      homeTeamName: 'Polonia Raczki'
    }
  ];

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

  constructor() {
  }

  getAllTeams() {
    return this.teamList;
  }

  getAllMatches() {
    return this.matchList;
  }

  getMatchById(matchId: number) {
    const matches = this.matchList.filter(match => match.id === matchId);
    if (matches.length > 0) {
      return matches[0];
    }
  }

  setMatchToBet(matchToBet: Match) {
    this.matchToBet = matchToBet;
  }

  addMatch(matchToAdd: Match) {
    this.matchList.push(matchToAdd);
  }

  addTeam(teamToAdd: Team) {
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
