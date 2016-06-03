function run ($rootScope, UserService) {

   $rootScope.$on('$stateChangeSuccess', (event, state) => {
     // There are a few params that `$stateChangeSuccess` injects in
     // The first one is `event` which tells us about the event
     // The second is `state` which is the state we just went to, also called "currentState"
     UserService.checkAuth(state.name); // pass in the state name (root, root.login etc)

   });
 }

 run.$inject = ['$rootScope', 'UserService'];
 export { run };
