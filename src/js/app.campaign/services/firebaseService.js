function FireBaseService ( $firebaseArray ) {

  let firebaseURL = 'https://twitter-ticker-d2d86.firebaseio.com/';

  this.getTweets = getTweets;
  this.createCampaign = createCampaign;
  this.addTweet = addTweet;


  function createCampaign ( campaignId ) {
    return new Firebase ( firebaseURL + 'campaigns/' + campaignId + '/tweets' )
  }

  function addTweet ( fbRef, tweet ) {
    return fbRef.$add( tweet );
  }

  function getTweets (campaignId) {
    console.log(fbApp);
    let ref = fbApp.database().ref();
    let messagesRef = ref.child('campaigns');
    return $firebaseArray(ref);
  }


}

FireBaseService.$inject = [ '$firebaseArray' ];
export { FireBaseService };
