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
    entry.newBook = {};
    entry.showWelcome = true;
    entry.showEntry = false;


    entry.submitBook = function () {
      var addedBook = booksService.addBook(entry.newBook);
      if (!addedBook) {
        alert('Book did not get added for one of the following reasons:\n' +
              '1. Duplicate Title\n' +
              '2. Missing Title\n' + 
              '3. Missing Author\n');
      } else {
        entry.newBook = {};
      }
    }

  });
