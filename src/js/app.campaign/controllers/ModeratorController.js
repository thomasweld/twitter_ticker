import _ from "lodash";

function ModeratorController ( CampaignService ) {

  let vm = this;
  vm.addToModerated = addToModerated;
  vm.moderatedTweetList = [];

  vm.sampleData = [

    {
      text: "tweet number 1 #hashtag",
      user: {
        name: "UserName1",
        profile_image_url: "https://unsplash.it/400/400"
      }
    },
    {
      text: "tweet number 2 #hashtag",
      user: {
        name: "UserName2",
        profile_image_url: "https://unsplash.it/400/400"
      }
    },
    {
      text: "tweet number 3 #hashtag",
      user: {
        name: "UserName3",
        profile_image_url: "https://unsplash.it/400/400"
      }
    },
    {
      text: "tweet number 4 #hashtag",
      user: {
        name: "UserName",
        profile_image_url: "https://unsplash.it/400/400"
      }
    }

  ]

  init();

  function init() {
    CampaignService.getCampaign().then ( (res) => {
        vm.SingleCampaign = res.data;
        console.log(vm.SingleCampaign.id);
    });
  }

  function addToModerated( tweet ) {
    vm.moderatedTweetList.push(tweet);
    // remove moderated tweet from streaming tweet list aka sampleData
    vm.sampleData = _.reject(vm.sampleData, function(sampleTweet) {
      return sampleTweet == tweet;
    });
  }

}

ModeratorController.$inject = [ 'CampaignService' ];
export { ModeratorController };
