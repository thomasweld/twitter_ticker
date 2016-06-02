function UserService ( Backand ) {

  this.register = register;
  this.login    = login;

  function register ( user ) {
    return Backand.signup(
      user.firstName,
      user.lastName,
      user.email,
      user.password,
      user.confirmPassword
    );
  }

  function login ( user ) {

  }

}

UserService.$inject = ['Backand'];
export { UserService };
