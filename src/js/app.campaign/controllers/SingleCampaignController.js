function SingleCampaignController ( CampaignService, $stateParams ) {

  let vm = this;

  init();

  function init() {
    CampaignService.getCampaign().then ( (res) => {
        vm.SingleCampaign = res.data;
        console.log(vm.SingleCampaign);
    });
  }

}

SingleCampaignController.$inject = [ 'CampaignService', '$stateParams' ];
export { SingleCampaignController };
