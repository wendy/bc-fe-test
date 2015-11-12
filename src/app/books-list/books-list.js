angular.module('app.books-list', [])
  .directive('myList', function () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'src/app/books-list/books-list.tpl.html',
      controller: 'ListCtrl as list'
    };
  })
  .controller('ListCtrl', function (booksService) {
    var list = this;

    list.getBooks = function (filter) {
      return booksService.getBooks(filter);
    };

    list.books = list.getBooks();

  });
