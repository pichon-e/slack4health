import {Injectable, provide}  from 'angular2/core';
import {Router}               from 'angular2/router'

@Injectable()
export class AuthService {

  constructor(public router: Router) { }

  login(user: string, password: string) {
    if (user === 'user' && password === 'password') {
      localStorage.setItem('username', user);
      return true;
    }
    // Go to home
    this.router.parent.navigateByUrl('/home');
  }

  goToLogin() {
    this.router.parent.navigateByUrl('/login');
  }

  goToSignup() {
    this.router.parent.navigateByUrl('/signup');
  }

  logout(): any {
    localStorage.removeItem('username');
  }

  getUser(): any {
    return localStorage.getItem('username');
  }

  isLogged(): boolean {
    return this.getUser() !== null;
  }
}

export var AUTH_PROVIDERS: Array<any> = [
  provide(AuthService, {useClass: AuthService})
];
