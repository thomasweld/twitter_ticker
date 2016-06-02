import angular from 'angular';

// Import Our Controllers
import { LoginController }   from './controllers/login.controller';
import { RegisterController} from './controllers/register.controller';

// Import Our Services
import { UserService } from './services/user.service';


angular
  .module('app.user', [])
  .controller('LoginController', LoginController)
  .controller('RegisterController', RegisterController)
  .service('UserService', UserService)
;
