import React from 'react';
import Book from './Book';
import AddForm from './AddForm';

function BookList() {
  const data = [
    {
      title: 'The Dark Tower',
      author: 'Stephen King',
    },
  ];
  return (
    <div>
      {data.map((book) => (
        <Book key={1} title={book.title} author={book.author} />
      ))}
      <AddForm />
    </div>
  );
}

export default BookList;
