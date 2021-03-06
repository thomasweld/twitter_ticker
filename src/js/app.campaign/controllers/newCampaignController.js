function NewCampaignController ( CampaignService, UserService, $state ) {

  let vm = this;

  vm.createNewCampaign = createNewCampaign;

  function createNewCampaign ( campaign ) {

    // pass form data ( campaign ) to function that gets coordinates from Gmaps API
    CampaignService.getLocationCoords( campaign ).then ( (res) => {
      console.log(res);
      // assign lat / long numbers to campaign attreibutes before posting to DB
      campaign.neLat = res.data.results[0].geometry.viewport.northeast.lat.toFixed(2);
      campaign.neLng = res.data.results[0].geometry.viewport.northeast.lng.toFixed(2);
      campaign.swLat = res.data.results[0].geometry.viewport.southwest.lat.toFixed(2);
      campaign.swLng = res.data.results[0].geometry.viewport.southwest.lng.toFixed(2);

      // assign user to campaign before posting to DB
      campaign.user = UserService.getUserId();
      // send campaign to DB with new attributes
      CampaignService.postNewCampaign(campaign).then( (res) => {
        console.log(res);
        $state.go('root.campaigns');
      });

    });


  }

}

NewCampaignController.$inject = ['CampaignService', 'UserService', '$state' ];
export { NewCampaignController };
