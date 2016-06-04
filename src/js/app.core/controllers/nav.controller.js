
function NavController ( UserService ) {

  let vm = this;

  vm.logOut = logOut;

  function logOut () {
    UserService.logout();
    console.log("loggin out");
  }

}

NavController.$inject = ['UserService'];
export { NavController };
