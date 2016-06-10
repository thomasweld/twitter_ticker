function LoginController ( UserService, $cookies, $state ) {

  let vm = this;

  vm.login = login;

  function login (user) {
    UserService.login(user).then( (res) => {
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

LoginController.$inject = [ 'UserService', '$cookies', '$state' ];
export { LoginController };
