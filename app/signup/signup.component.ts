import {Component}              from 'angular2/core';
import {Router}                 from 'angular2/router';
import {Http, HTTP_PROVIDERS}   from 'angular2/http';

import { User }                 from '../models/user';

@Component({
    selector: 'signup',
    templateUrl: 'app/signup/signup.component.html',
    styleUrls: ['app/signup/signup.component.css'],
})

export class SignupComponent {
    user = new User();
    constructor(public router: Router, public http: Http) {}

    goBack(username: string, password: string) {
        this.router.parent.navigateByUrl('/login');
    }

    signup(username: string, email: string, password: string) {
        this.http.get('http://localhost:5984/slack4health/users')
            .subscribe(
                response => {
                    console.log("get");
                },
                error => {
                    alert(error.text());
                    console.log(error.text());
                }
            );

        // Tester si le username existe déjà
        // Si oui message d'erreur
        // Si non création du compte et message positif
    }
}
