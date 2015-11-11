angular.module('app.books.service', [])
  .factory('booksService', function () {
    var books = [
      {title: 'El Pooch', author: 'Alex Nelson', url: ''},
      {title: 'The Flight', author: 'Scott Masterson', url: ''}
    ];

    var service = {
      getBooks: function () {
        return books;
      },
      addBook: function (book) {
        books.push(book);
        return book;
      }
    };

    return service;
  });
