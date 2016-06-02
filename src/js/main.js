import angular from 'angular';

// Import Other Modules
import './app.core/index';
import './app.user/index';

angular.module('app', ['app.core', 'app.user']);
