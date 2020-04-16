import {Injectable} from '@angular/core';


export interface Match {
  id: number;
  homeTeamName: string;
  awayTeamName: string;
}

export interface Team {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class MatchService {

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

  constructor() {
  }

  getAllTeams() {
    return this.teamList;
  }

  getAllMatches() {
    return this.matchList;
  }

  addMatch(matchToAdd: Match) {
    this.matchList.push(matchToAdd);
  }

  addTeam(teamToAdd: Team) {
    this.teamList.push(teamToAdd);
  }
}
