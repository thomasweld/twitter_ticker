
function config ($urlRouterProvider, $stateProvider, BackandProvider) {

  BackandProvider
    .setSignUpToken('05bda5b9-7f6b-4975-8fbe-60110e023e75')
    .setAppName('twitterticker')
  ;

 $urlRouterProvider.otherwise('/'); // Default page if no state matched

 $stateProvider
  .state('root', {
    abstract: true,
    templateUrl: 'templates/layout.tpl.html',
    controller: 'NavController as vm'
  })
  .state('root.home', {
    url: '/',
    templateUrl: 'templates/home.tpl.html'
  })
  .state('root.login', {
    url: '/login',
    templateUrl: 'templates/login.tpl.html',
    controller: 'LoginController as vm'
  })
  .state('root.register', {
    url: '/register',
    templateUrl: 'templates/register.tpl.html',
    controller: 'RegisterController as vm'
  })
  .state('root.newCampaign', {
    url: '/new',
    templateUrl: 'templates/newCampaign.tpl.html',
    controller: 'NewCampaignController as vm'
  })
  .state('root.campaigns', {
    url: '/campaigns',
    templateUrl: 'templates/campaignsList.tpl.html',
    controller: 'CampaignsController as vm'
  })
  .state('root.moderator', {
    url: '/campaigns/:campaignId',
    templateUrl: 'templates/moderator.tpl.html',
    controller: 'ModeratorController as vm'
  })
  .state('root.live', {
    url: '/campaigns/:campaignId/live',
    templateUrl: 'templates/live.tpl.html',
    controller: 'LiveCampaignController as vm'
  })
 ;

}

config.$inject = ['$urlRouterProvider', '$stateProvider', 'BackandProvider'];
export { config };
