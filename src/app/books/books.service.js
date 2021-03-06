angular.module('app.books.service', [])
  .factory('booksService', function () {
    var books = [
      {title: 'El Pooch', author: 'Alex Nelson', imageUrl: 'http://www.onthespot.co.uk/wp-content/uploads/2015/08/cute-dog-pictures-for-kids.jpg'},
      {title: 'Ryze of the Faker', author: 'Ray Ma', imageUrl: 'http://ryzeonline.com/wp-content/uploads/ryze-league-of-legends.png'},
      {title: 'How I Became an ADC', author: 'Thresh Lantern', imageUrl: 'http://images6.fanpop.com/image/photos/36400000/League-of-legends-image-league-of-legends-36418964-500-549.jpg'}
    ];

    var service = {
      getBooks: function (filter) {
        if (!!filter) {
          books.sort(function (a,b) {
            return a[filter].toUpperCase() > b[filter].toUpperCase();
          });          
        }
        return books;
      },
      addBook: function (book) {
        var addedBook = true;

        if (book.title === undefined || book.author === undefined) {
          addedBook = false;
        } else if (service.isDuplicate(book.title)) {
          addedBook = false;
        } else {
          if (book.imageUrl === undefined) {
            book.imageUrl = 'http://www.gibbahouse.com/wp-content/uploads/2014/02/20-Funny-Shocked-Cat-Memes-3.jpg';
          }
          books.push(book);
        }

        return addedBook;
      },
      isDuplicate: function(title) {
        for (var i = 0; i < books.length; i++) {
          if (books[i].title.toUpperCase() === title.toUpperCase()) {
            return true;
          }
        }

        return false;
      }
    };

    return service;
  });
