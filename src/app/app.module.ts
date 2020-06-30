import {BrowserModule} from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {CanActivate, Router, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AppService} from './app.service';
import {FormsModule} from '@angular/forms';
import {MatchListComponent} from './match-list/match-list.component';
import {MatchComponent} from './match/match.component';
import {BetComponent} from './bet/bet.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private app: AppService, private router: Router) {
  }

  canActivate() {
    if (!this.app.isAuthenticated()) {
      this.router.navigateByUrl('login');
      return false;
    }
    return true;
  }
}

const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [LoginGuard], children: [
      {path: 'matchList', component: MatchListComponent, canActivate: [LoginGuard]},
      {path: 'match', component: MatchComponent, canActivate: [LoginGuard]},
      {path: 'bet', component: BetComponent, canActivate: [LoginGuard]}

    ]
  },
  {path: 'login', component: LoginComponent},

];

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MatchListComponent,
    MatchComponent,
    BetComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [LoginGuard, AppService, BetComponent, {
    provide: HTTP_INTERCEPTORS,
    useClass: XhrInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {

}


