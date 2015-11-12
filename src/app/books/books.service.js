angular.module('app.books.service', [])
  .factory('booksService', function () {
    var books = [
      {title: 'El Pooch', author: 'Alex Nelson', imageUrl: 'http://www.onthespot.co.uk/wp-content/uploads/2015/08/cute-dog-pictures-for-kids.jpg'},
      {title: 'The Flight', author: 'Scott Masterson', imageUrl: 'http://s.hswstatic.com/gif/fuel-dump-1.jpg'}
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
