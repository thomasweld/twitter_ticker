import angular from 'angular';

// Import Our Constants
// import { GOOGLE } from './constants/google.api';

// Import Our Controllers
import { AdminController }   from './controllers/adminController';

// Import Our Services
// import { CampaignService } from './services/CampaignService';


angular
  .module('app.admin', [])
  .controller('AdminController', AdminController)
;
