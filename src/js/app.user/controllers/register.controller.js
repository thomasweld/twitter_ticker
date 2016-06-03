function RegisterController ( UserService ) {

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
    });

  }


}

RegisterController.$inject = ['UserService'];
export { RegisterController };
