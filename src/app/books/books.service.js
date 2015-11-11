angular.module('app.books.service', [])
  .factory('booksService', function () {
    var books = [
      {title: 'El Pooch', author: 'Alex Nelson', imageUrl: ''},
      {title: 'The Flight', author: 'Scott Masterson', imageUrl: ''}
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
