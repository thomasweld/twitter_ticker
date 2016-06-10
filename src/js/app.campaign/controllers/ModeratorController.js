function ModeratorController ( CampaignService, $stateParams ) {

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
        console.log(vm.SingleCampaign);
    });
  }

  function addToModerated( tweet ) {
    // console.log(tweet);
    vm.moderatedTweetList.push(tweet);
    console.log(vm.moderatedTweetList);
  }

}

ModeratorController.$inject = [ 'CampaignService', '$stateParams' ];
export { ModeratorController };
