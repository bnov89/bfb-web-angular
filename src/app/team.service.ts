import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private httpClient: HttpClient) { }

  addTeam(teamName: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('bartek:nowak')
      })
    };
    this.httpClient.post('http://localhost:8080/teams', teamName, httpOptions).subscribe(value => console.log(value));
  }

  getAllTeams() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('bartek:nowak')
      })
    };
    return this.httpClient.get('http://localhost:8080/teams', httpOptions);
  }
}
