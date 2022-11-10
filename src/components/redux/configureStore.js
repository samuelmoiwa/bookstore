import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import bookReducer from './books/books';

const reducer = combineReducers({
  Books: bookReducer,
  Categories: categoriesReducer,
});

const store = configureStore({ reducer });

export default store;
