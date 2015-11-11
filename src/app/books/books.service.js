angular.module('app.books.service', [])
  .factory('booksService', function () {
    var books = [
      {title: 'El Pooch', author: 'Alex Nelson', imageUrl: 'https://mummzydearest.files.wordpress.com/2015/01/pooch.jpg?w=300&h=225&crop=1'},
      {title: 'The Flight', author: 'Scott Masterson', imageUrl: 'http://hd.wallpaperswide.com/thumbs/airplane_3-t2.jpg'}
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
