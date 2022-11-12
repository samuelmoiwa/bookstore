/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, getBooks } from './redux/books/books';

const Book = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();

  const deleteBook = (id) => {
    dispatch(removeBook(id));
    dispatch(getBooks(id));
  };

  return (
    <div className="book-item_main_div">
      <div className="book-item">
        <p className="action">Action</p>
        <p className="title">{title}</p>
        <p className="author">{author}</p>

        <div className="button_div">
          <button className="comment_btn" type="button"> Comment </button>
          <button className="remove_btn" type="button" onClick={() => deleteBook(id)}>Remove</button>
          <button className="edit_btn" type="button"> Edit </button>
        </div>
      </div>

      <div className="percentage_main_div">
        <div className="percentage_div"></div>
        <div className="percentage_status_div">
          <h3 className="percentage">64%</h3>
          <p className="percentage_status">Completed</p>
        </div>
      </div>
      <div className="current_chapter_div">
        <p className="current_chapter"> CURRENT CHAPTER</p>
        <p className="chapter_number"> Chapter 17</p>
        <button type="button" className="update_progress_btn">UPDATE PROGRESS</button>

      </div>
    </div>
  );
};

Book.propTypes = ({
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
}).isRequired;

export default Book;
