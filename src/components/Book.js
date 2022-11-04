import React from 'react';

const Book = (prop) => {
  const { title, author } = prop;
  return (
    <div className="book-item">
      <p>{title}</p>
      <p>{author}</p>
      <button type="button">Delete</button>
    </div>
  );
};

export default Book;
