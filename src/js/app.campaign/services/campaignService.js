function CampaignService ( $http, $stateParams, SERVER, GOOGLE ) {

  this.postNewCampaign = postNewCampaign;
  this.getLocationCoords = getLocationCoords;
  this.getAllUserCampaigns = getAllUserCampaigns;
  this.getCampaign = getCampaign;

  function getLocationCoords( campaign ) {
    return $http.get(GOOGLE.URL + 'address=' + campaign.location_address + '&key=' + GOOGLE.KEY);
  }

  function postNewCampaign (campaign) {
    return $http.post(SERVER.URL + 'campaigns', campaign);
  }

  function getAllUserCampaigns() {
    return $http.get(SERVER.URL + 'campaigns');
  }

  function getCampaign () {
    return $http.get(SERVER.URL + 'campaigns/' + $stateParams.campaignId);
  }

}

CampaignService.$inject = [ '$http', '$stateParams', 'SERVER', 'GOOGLE' ];
export { CampaignService };
