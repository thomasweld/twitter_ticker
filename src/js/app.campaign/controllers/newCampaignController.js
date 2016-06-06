
function NewCampaignController ( CampaignService, UserService ) {

  let vm = this;

  vm.createNewCampaign = createNewCampaign;

  function createNewCampaign ( campaign ) {

    // pass form data ( campaign ) to function that gets coordinates from Gmaps API

    // .then

    // campaign.coord = res.lat/long

    //  CampaignService.postNewCampaign needs to be called within Coordinate function


    ///////////////////////////////////////////


    campaign.user = UserService.getUserId();
    console.log(campaign.user);

    CampaignService.postNewCampaign(campaign).then( (res) => {
      console.log(res);
      console.log(res.config.data);
      // $state.go('root.home');
    });
  }

}

NewCampaignController.$inject = ['CampaignService', 'UserService' ];
export { NewCampaignController };
