import {Component, ElementRef}          from 'angular2/core';
import {Router}             from 'angular2/router';
import {}                   from 'material-design-lite/'


@Component({
    selector: 'home',
    templateUrl: 'app/home/components/home.component.html',
    styleUrls: ['app/home/components/home.component.css'],
})

export class HomeComponent {
    name: string = 'World';
    constructor(element: ElementRef) {
    	setTimeout(() => {
            this.name = 'NEW World';
        }, 2000);
    }

    ngAfterViewInit(element: ElementRef) {
        componentHandler.upgradeElement(element);
    }
}
