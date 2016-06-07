
function NavController ( UserService, $cookies ) {

  let vm = this;

  vm.logOut = logOut;
  vm.loggedIn = loggedIn;


  function logOut () {
    UserService.logout();
    console.log("loggin out");
  }

  function loggedIn () {
    if ( $cookies.get('user') ) {
      return true;
    } else {
      return false;
    }
  }

}

NavController.$inject = ['UserService', '$cookies'];
export { NavController };
