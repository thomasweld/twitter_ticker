function AdminController ( CampaignService ) {

    // pass form data ( campaign ) to function that gets coordinates from Gmaps API
    CampaignService.getCampaign( campaign ).then ( (res) => {
      console.log(res);

    });


}

AdminController.$inject = ['CampaignService'];
export { AdminController };
