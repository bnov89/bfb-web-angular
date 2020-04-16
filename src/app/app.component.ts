import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppService} from './app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bfb-web-angular';


  constructor(private app: AppService, private http: HttpClient, private router: Router) {
    // this.app.authenticate(undefined, undefined);
    // http.get('http://localhost:8080/user/login/bartek').subscribe();
  }

  logout() {
    // this.http.post('logout', {}).finally(() => {
    //   this.app.authenticated = false;
    //   this.router.navigateByUrl('/login');
    // }).subscribe();
  }
}
