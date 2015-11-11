angular.module('app.nav', [])
  .directive('myNav', function () {
    return {
      retrict: 'E',
      scope: {},
      templateUrl: 'src/app/nav/nav.tpl.html',
      controller: 'NavCtrl as nav'
    };
  })
  .controller('NavCtrl', function (booksService) {
    var nav = this;

    nav.getBooks = function () {
      return booksService.getBooks();
    };
  });