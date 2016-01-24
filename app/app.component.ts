/*
 * Angular
 */

import {Component} from 'angular2/core';
import {
	RouteConfig,
  RouterLink,
	ROUTER_DIRECTIVES,
} from 'angular2/router';

/*
 * Components
 */

import {LoginComponent}       from './login/login.component';
import {SignupComponent}      from './signup/signup.component';
import {HomeComponent}        from './home/components/home.component';
import {LoggedInRouterOutlet} from './LoggedInOutlet';

@Component({
    selector: 'slack4health',
    directives: [LoggedInRouterOutlet],
    template: `
      <router-outlet></router-outlet>
    `,
    styleUrls: ['app/app.component.css'],
})
@RouteConfig([
  { path: '/', redirectTo: ['/Login'] },
  { path: '/home', component: HomeComponent, as: 'Home' },
  { path: '/login', component: LoginComponent, as: 'Login' },
  { path: '/signup', component: SignupComponent, as: 'Signup' }
])

export class AppComponent {
}
