import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Find contact"
      value={filter}
      onChange={event => dispatch(changeFilter(event.target.value))}
      className={css.searchBox}
    />
  );
};

export default SearchBox;