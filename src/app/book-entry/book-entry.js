angular.module('app.book-entry', [])
  .directive('myEntry', function () {
    return {
      retrict: 'E',
      scope: {},
      templateUrl: 'src/app/book-entry/book-entry.tpl.html',
      controller: 'EntryCtrl as entry'
    };
  })
  .controller('EntryCtrl', function (booksService) {
    var entry = this;

  });
