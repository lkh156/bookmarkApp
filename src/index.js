import $ from 'jquery';
import 'normalize.css';
import './index.css';
import bookmarks from './bookmarks';
import api from './api';
import store from './store';



function main() {
  api.getBookmarks()
    .then(bookmarksList => {
      for (let i = 0; i < bookmarksList.length; i++) {
        store.createBookmark(bookmarksList[i]);
      };
      bookmarks.render();
    });
    bookmarks.eventHandlers();
}

$(main);