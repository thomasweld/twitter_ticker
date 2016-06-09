function CampaignsController ( CampaignService ) {

  let vm = this;

  init();

  function init() {
    CampaignService.getAllUserCampaigns().then ( (res) => {
        console.log(res.data.data);
        vm.campaignList = res.data.data;
    });
  }

}

CampaignsController.$inject = [ 'CampaignService' ];
export { CampaignsController };
