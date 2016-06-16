import _ from "lodash";
import io from 'socket.io-client';


function ModeratorController ( $scope, CampaignService, FireBaseService ) {

  let vm = this;
  vm.addToModerated = addToModerated;
  vm.moderatedTweetList = [];
  vm.liveTweets = [];

  let firebaseRef = [];


  init();

  function init() {

    CampaignService.getCampaign().then ( (res) => {
        vm.SingleCampaign = res.data;
        console.log(vm.SingleCampaign.id);

        // firebaseRef = FireBaseService.createCampaign('campaign-' + vm.SingleCampaign.id);

        // console.log(firebaseRef);
        // let firebaseURL = 'https://twitter-ticker-d2d86.firebaseio.com';
        // console.log(firebaseURL);
        // let ref = new Firebase (firebaseURL);

        // vm.moderatedTweetList = FireBaseService.getTweets();

        let tweetHashtag = vm.SingleCampaign.hashtag;
        let tweetSwLat   = vm.SingleCampaign.swLat;
        let tweetSwLng   = vm.SingleCampaign.swLng;
        let tweetNeLat   = vm.SingleCampaign.neLat;
        let tweetNeLng   = vm.SingleCampaign.neLng;

        let query = 'cords='  + tweetSwLat + ',' + tweetSwLng + ',' + tweetNeLat + ',' + tweetNeLng;

        // let socket = io('http://tweet-stream-proxy.herokuapp.com', { query: query });
        let socket = io('http://tweet-stream-sample.herokuapp.com', { query: 'cords=-74,40,-73,41' });

        console.log(query);

        socket.on('newTweet', function(tweet) {
          $scope.$apply(function() {
            console.log(tweet);
            if (_.includes(tweet.text, tweetHashtag)){
              vm.liveTweets.push(tweet);
            }
          });
        });


    });
  }

  function addToModerated( tweet ) {

    // FireBaseService.addTweet(vm.moderatedTweetList, tweet);

    // add select tweets to moderatedTweetList
    vm.moderatedTweetList.push(tweet);
    // add tweets to firebase fbmoderatedTweetList
    // remove moderated tweet from streaming tweet list aka sampleData
    vm.liveTweets = _.reject(vm.liveTweets, function(current) {
      return current == tweet;
    });
  }



}

ModeratorController.$inject = [ '$scope', 'CampaignService', 'FireBaseService' ];
export { ModeratorController };
