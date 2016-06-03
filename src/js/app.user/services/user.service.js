function UserService ( Backand, $cookies, $state ) {

  this.register = register;
  this.login    = login;
  this.checkAuth = checkAuth;
  this.logout = logout;

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
    return Backand.signin (
      user.email,
      user.password
    );
  }

  function logout () {
    $cookies.remove('user');
    Backand.signout();
    $state.go('root.login');
  }

  function checkAuth ( currentState ) {

    let user = $cookies.getObject('user');
    if (user) {
      console.log('user is logged in');
    } else {
      console.log('...redirecting to login page');
      $state.go('root.login')
    }
  }

}

UserService.$inject = ['Backand', '$cookies', '$state' ];
export { UserService };
