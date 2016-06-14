
import io from 'socket.io-client';

function LiveCampaignController ( $scope, CampaignService ) {

  let vm = this;

  init();

  function init() {
    CampaignService.getCampaign().then ( (res) => {
        vm.SingleCampaign = res.data;
        console.log(vm.SingleCampaign);

        let tweetHashtag = vm.SingleCampaign.hashtag;
        let tweetNeLat   = vm.SingleCampaign.neLat;
        let tweetNeLng   = vm.SingleCampaign.neLng;
        let tweetSwLat   = vm.SingleCampaign.swLat;
        let tweetSwLng   = vm.SingleCampaign.swLng;

        vm.tweets = [];

        let query = 'tag=' + tweetHashtag + '&cords=' + tweetNeLat + ',' + tweetNeLng + ',' + tweetSwLat + ',' + tweetSwLng;

        let socket = io('http://tweet-stream-proxy.herokuapp.com', { query: query });

        console.log(query);

        socket.on('newTweet', function(tweet) {
          $scope.$apply(function() {
            vm.tweets.push(tweet);
          });
        });
    });
  }

}

LiveCampaignController.$inject = [ '$scope', 'CampaignService' ];
export { LiveCampaignController };
