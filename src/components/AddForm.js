import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addbook, getBooks } from './redux/books/books';

function AddForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    const book = {
      id: nanoid(),
      author,
      title,
      category: '',
    };
    dispatch(addbook(book));
    setTitle('');
    setAuthor('');
    dispatch(getBooks());
  };

  return (
    <div className="form_section">
      <div className="add-book">
        <h3 className="add-book_title">Add New Book</h3>
        <form onSubmit={submitForm}>
          <input className="input_title" placeholder="Book title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <input className="input_author" placeholder="Author" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
          <button className="add_book_btn" type="submit">ADD BOOK</button>
        </form>
      </div>
    </div>
  );
}

export default AddForm;
