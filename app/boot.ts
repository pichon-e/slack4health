import {bootstrap}          from 'angular2/platform/browser'

import {AUTH_PROVIDERS}     from './services/AuthService';

import {
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  HashLocationStrategy,
  LocationStrategy,
  RouteConfig,
}                           from 'angular2/router';

import {HTTP_PROVIDERS}     from 'angular2/http';

import {AppComponent}       from './app.component'

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	AUTH_PROVIDERS,
    HTTP_PROVIDERS
]);
