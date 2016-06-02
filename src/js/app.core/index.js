import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';
import './vendors/backand';

// Import Our Constants
import { serverConstant } from './constants/server.constant';

// Import Our Controllers
import { RootController } from './controllers/root.controller';

// Import Our Config
import { config } from './config';

angular
  .module('app.core', ['ui.router', 'backand', 'ngCookies'])
  .config(config)
  .constant('SERVER', serverConstant)
  .controller('RootController', RootController)
  // .run(function ($rootScope, UserService) {
  //
  //   $rootScope.$on('$stateChangeSuccess', function (event, toState) {
  //     UserService.authenticate(toState.name);
  //   });
  //
  // })
;
