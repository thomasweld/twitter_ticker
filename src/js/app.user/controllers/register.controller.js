function RegisterController ( UserService ) {

  let vm = this;

  vm.addUser = addUser;

  function addUser (user) {
    UserService.register(user).then( (res) => {
      console.log(res);
    });
  }


}

RegisterController.$inject = ['UserService'];
export { RegisterController };
