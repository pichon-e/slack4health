import {Component}              from 'angular2/core';
import {Router}                 from 'angular2/router'
import {Http, HTTP_PROVIDERS}   from 'angular2/http';

import { User }                 from '../models/user';

@Component({
    selector: 'login',
    templateUrl: 'app/login/login.component.html',
    styleUrls: ['app/login/login.component.css'],
})


export class LoginComponent {

	constructor(public router: Router, public http: Http) { }

    user = new User();

	login(username: string, password: string) {
        // test if http.get() couch db user exist and is the same
        // if yes save token and go to home
        this.router.parent.navigateByUrl('/home');
        // else print error
	}

	signup() {
        this.router.parent.navigateByUrl('/signup');
	}

	logout() {
        // delete token
	}
}

