import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';
import './vendors/backand';

// Import Our Constants
import { serverConstant } from './constants/server.constant';


// Import utility files
import { config } from './config';
import { run } from './run';

// import controllers
import { NavController } from './controllers/nav.controller';

angular
  .module('app.core', ['ui.router', 'backand', 'ngCookies'])
  .config(config)
  .constant('SERVER', serverConstant)
  .run(run)
  .controller('NavController', NavController)
;
