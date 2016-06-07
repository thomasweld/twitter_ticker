function CampaignService ( $http, SERVER, GOOGLE ) {

  this.postNewCampaign = postNewCampaign;
  this.getLocationCoords = getLocationCoords;

  function getLocationCoords( campaign ) {
    return $http.get(GOOGLE.URL + 'address=' + campaign.location_address + '&key=' + GOOGLE.KEY);
  }

  function postNewCampaign (campaign) {

    return $http.post(SERVER.URL + 'campaigns', campaign);

  }

}

CampaignService.$inject = [ '$http', 'SERVER', 'GOOGLE' ];
export { CampaignService };
