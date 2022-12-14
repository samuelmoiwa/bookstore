const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/amhAAPed7qavCAChFLrI/books';

const initialState = [];

async function getBooksApi() {
  const response = await fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const books = await response.json();
  console.log(books);
  const booksData = Object.keys(books).map((id) => ({
    id,
    title: books[id][0].title,
    author: books[id][0].author,
  }));
  return booksData;
}

export const getBooks = () => (async (dispatch) => {
  const booksData = await getBooksApi();
  dispatch({
    type: GET_BOOKS,
    payload: booksData,
  });
});

async function addBooksToApi(payload) {
  const {
    id, title, author, category,
  } = payload;
  const send = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      title,
      author,
      category,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  (await send.text());
}

export const addbook = (payload) => (async (dispatch) => {
  const { id, title, author } = payload;
  await addBooksToApi(payload);
  dispatch({
    type: ADD_BOOK,
    book: { id, title, author },
  });
});

async function removeBookFromApi(id) {
  const remove = await fetch(`${URL}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  (await remove.text());
}

export const removeBook = (id) => (async (dispatch) => {
  await removeBookFromApi(id);
  dispatch({
    type: REMOVE_BOOK,
    id,
  });
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);

    case GET_BOOKS:
      return action.payload;

    default:
      return state;
  }
};

export default bookReducer;
