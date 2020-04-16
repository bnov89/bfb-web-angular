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
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [LoginGuard]},
  {path: 'matchList', component: MatchListComponent, canActivate: [LoginGuard]},
  {path: 'match', component: MatchComponent, canActivate: [LoginGuard]}
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
    MatchComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoginGuard, AppService, {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {

}


