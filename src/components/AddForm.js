import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addbook } from './redux/books/books';

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
    };
    dispatch(addbook(book));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="add-book">
      <h3>Add New Book</h3>
      <form onSubmit={submitForm}>
        <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default AddForm;
