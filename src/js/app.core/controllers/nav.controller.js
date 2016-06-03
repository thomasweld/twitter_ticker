
function NavController (UserService) {

  let vm = this;

  vm.logout = logout;

  function logout () {
    UserService.logout();
  }

}

NavController.$inject = ['UserService'];
export { NavController };
