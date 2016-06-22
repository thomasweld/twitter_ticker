
import io from 'socket.io-client';

function LiveCampaignController ( CampaignService, FirebaseService ) {

  let vm = this;
  vm.liveModeratedTweetList = [];

  init();

  function init() {
    CampaignService.getCampaign().then ( (res) => {
        vm.SingleCampaign = res.data;
        console.log(vm.SingleCampaign);

        vm.liveModeratedTweetList = FirebaseService.getAllModeratedTweets( vm.SingleCampaign.id );

        console.log(vm.liveModeratedTweetList);
    });
  }

}

LiveCampaignController.$inject = [ 'CampaignService', 'FirebaseService' ];
export { LiveCampaignController };
