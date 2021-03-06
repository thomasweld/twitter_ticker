function RegisterController ( UserService, $cookies, $state ) {

  let vm = this;

  vm.addUser = addUser;

  function addUser (user) {
    UserService.register(user).then( (res) => {
      console.log(res);

      let user = {
        name: res.fullName,
        id: res.userId,
        email: res.username
      };
      $cookies.putObject('user', user);

      $state.go('root.home');
    });



  }


}

RegisterController.$inject = ['UserService', '$cookies', '$state' ];
export { RegisterController };
