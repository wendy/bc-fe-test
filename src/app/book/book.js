angular.module('app.book', [])
  .directive('myBook', function () {
    return {
      bindToController: true,
      restrict: 'E',
      replace: true,
      scope: {book: '='},
      templateUrl: 'src/app/book/book.tpl.html',
      controller: 'BookCtrl as bookCtrl'
    };
  })
  .controller('BookCtrl', function () {
    var bookCtrl = this;

    bookCtrl.showStars = false;
    bookCtrl.stars = {};
    
    bookCtrl.starsNum = function(num) {
      for (var i = 1; i < 6; i++) {
        if (i <= num) {
          bookCtrl.stars[i] = true;
        } else {
          bookCtrl.stars[i] = false;
        }
      }
    };
  });
