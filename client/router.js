Router.configure({
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading'
});

var filters = {
  isLoggedIn: function() {
    if (!(Meteor.loggingIn() || Meteor.user())) {
      this.redirect('home');
      this.stop(); 
    }
  }
}

Router.before(filters.isLoggedIn, {except: ['home','signup']});


Router.map(function () {
  this.route('home',{
  	path: '/',
  	template: 'loginForm'
  });

  this.route('signup',{
  	path: '/signup',
  	template: 'signupForm'
  });

  this.route('creategroup',{
    path: '/creategroup',
    template: 'createGroup'
  });

  this.route('dashboard',{
  	path: '/dashboard',
  	template: 'billPage',
    waitOn: function () {
      return Meteor.subscribe('bills');
    }
  });
  // matches all urls but doesn't get called until all previous routes have been tested
  // so in this case for invalid url
  this.route('notFound', {path: '*'});
});