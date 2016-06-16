function FirebaseService ( $firebaseArray ) {

  let firebaseURL = 'https://twitter-ticker-d2d86.firebaseio.com/';

  this.getAllModeratedTweets = getAllModeratedTweets;
  this.addModeratedTweet = addModeratedTweet;
  this.removeModeratedTweet = removeModeratedTweet;

  function getAllModeratedTweets (campaignId) {
    let ref = fbApp.database().ref().child('tweets-' + campaignId);
    return $firebaseArray(ref);
  }

  function addModeratedTweet (ref, tweet) {
    return ref.$add(tweet);
  }

  function removeModeratedTweet (ref, tweet) {
    return ref.$remove(tweet);
  }

}

FirebaseService.$inject = [ '$firebaseArray' ];
export { FirebaseService };
