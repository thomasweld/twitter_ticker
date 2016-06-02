function RootController (UserService) {

  let vm = this;

  vm.logOut = logOut;

  function logOut () {
    UserService.logOut();
  }

}

RootController.$inject = ['UserService'];
export { RootController };
