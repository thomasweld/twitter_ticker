function LoginController ( UserService, $cookies ) {

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
    });
  }

}

LoginController.$inject = [ 'UserService', '$cookies' ];
export { LoginController };
