import angular from 'angular';

// Import Other Modules
import './app.core/index';
import './app.user/index';
import './app.campaign/index';

angular.module('app', [ 'app.core', 'app.user', 'app.campaign' ]);
