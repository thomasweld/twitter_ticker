function ModeratorController ( CampaignService, $stateParams ) {

  let vm = this;

  init();

  function init() {
    CampaignService.getCampaign().then ( (res) => {
        vm.SingleCampaign = res.data;
        console.log(vm.SingleCampaign);
    });
  }

}

ModeratorController.$inject = [ 'CampaignService', '$stateParams' ];
export { ModeratorController };
