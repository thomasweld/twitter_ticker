import angular from 'angular';

// Import Our Controllers
import { NewCampaignController }   from './controllers/newCampaignController';

// Import Our Services
import { CampaignService } from './services/CampaignService';


angular
  .module('app.campaign', [])
  .controller('NewCampaignController', NewCampaignController)
  .service('CampaignService', CampaignService)
;
