import angular from 'angular';
import 'angularfire';
import 'jquery';

// Import Our Constants
import { GOOGLE } from './constants/google.api';

// Import Our Controllers
import { NewCampaignController }   from './controllers/newCampaignController';
import { CampaignsController }   from './controllers/CampaignsController';
import { ModeratorController }   from './controllers/ModeratorController';
import { LiveCampaignController }   from './controllers/LiveCampaignController';

// Import Our Services
import { CampaignService } from './services/CampaignService';
import { FirebaseService }   from './services/FirebaseService';


angular
  .module('app.campaign', ['firebase'])
  .controller('NewCampaignController', NewCampaignController)
  .controller('CampaignsController', CampaignsController)
  .controller('ModeratorController', ModeratorController)
  .controller('LiveCampaignController', LiveCampaignController)
  .constant('GOOGLE', GOOGLE)
  .service('CampaignService', CampaignService)
  .service('FirebaseService', FirebaseService)
;
