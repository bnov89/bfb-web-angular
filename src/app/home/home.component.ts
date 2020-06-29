import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {AppService} from '../app.service';
import {HttpClient} from '@angular/common/http';
import {MediaMatcher} from '@angular/cdk/layout';

export class Greeting {
  id: string;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {

  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;

  title = 'Demo';
  greeting: Greeting = {
    id: '',
    name: ''
  };

  constructor(private app: AppService, private http: HttpClient, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
    // const headers = new HttpHeaders({
    //   authorization: 'Basic ' + btoa('bartek' + ':' + 'nowak')
    // });
    // // tslint:disable-next-line:no-shadowed-variable
    // http.get('http://localhost:8080/user/login/bartek', {headers})
    // // tslint:disable-next-line:no-shadowed-variable
    //   .subscribe((data: Greeting) => {
    //   return this.greeting = data;
    // });
  }

  authenticated() {
    return this.app.authenticated;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

}
