import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class Greeting {
  id: string;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  title = 'Demo';
  greeting: Greeting = {
    id: '',
    name: ''
  };

  constructor(private app: AppService, private http: HttpClient) {
    const headers = new HttpHeaders({
      authorization: 'Basic ' + btoa('bartek' + ':' + 'nowak')
    });
    // tslint:disable-next-line:no-shadowed-variable
    http.get('http://localhost:8080/user/login/bartek', {headers})
    // tslint:disable-next-line:no-shadowed-variable
      .subscribe((data: Greeting) => {
      return this.greeting = data;
    });
  }

  authenticated() {
    return this.app.authenticated;
  }

}
