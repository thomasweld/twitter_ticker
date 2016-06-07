import angular from 'angular';

// Import Our Constants
import { GOOGLE } from './constants/google.api';

// Import Our Controllers
import { NewCampaignController }   from './controllers/newCampaignController';

// Import Our Services
import { CampaignService } from './services/CampaignService';


angular
  .module('app.campaign', [])
  .controller('NewCampaignController', NewCampaignController)
  .constant('GOOGLE', GOOGLE)
  .service('CampaignService', CampaignService)
;
