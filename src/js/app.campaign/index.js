import angular from 'angular';

// Import Our Constants
import { GOOGLE } from './constants/google.api';

// Import Our Controllers
import { NewCampaignController }   from './controllers/newCampaignController';
import { CampaignsController }   from './controllers/CampaignsController';
import { SingleCampaignController }   from './controllers/SingleCampaignController';



// Import Our Services
import { CampaignService } from './services/CampaignService';


angular
  .module('app.campaign', [])
  .controller('NewCampaignController', NewCampaignController)
  .controller('CampaignsController', CampaignsController)
  .controller('SingleCampaignController', SingleCampaignController)
  .constant('GOOGLE', GOOGLE)
  .service('CampaignService', CampaignService)
;
