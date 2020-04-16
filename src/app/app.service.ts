import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  authenticated = false;

  constructor(private http: HttpClient) {
  }

  authenticate(credentials, callback) {
    this.authenticated = credentials.username === 'bartek' && credentials.password === 'nowak';
    // const headers = new HttpHeaders(credentials ? {
    //   authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    // } : {});
    //
    // this.http.get('http://localhost:8080/team/list', {headers}).subscribe(response  => {
    //   if (response['name']) {
    //     this.authenticated = true;
    //   } else {
    //     this.authenticated = false;
    //   }
    return callback && callback();
    // });
  }

  isAuthenticated() {
    return this.authenticated;
  }

}
