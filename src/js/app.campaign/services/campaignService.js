function CampaignService ( $http, SERVER ) {

  this.postNewCampaign = postNewCampaign;

  function postNewCampaign (campaign) {

    return $http.post(SERVER.URL + 'campaigns', campaign);

  }

}

CampaignService.$inject = [ '$http', 'SERVER' ];
export { CampaignService };
