import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Filter.css';
import { fetchSearchedCountryDetail } from '../../features/CountriesSlice';
// import { fetchSearchedContinents } from '../../redux/CountriesSlice';

const Search = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchSearchedCountryDetail(term))
    setTerm('')
  }

  return (
    <div className="Search">
      <form className="form_input" onSubmit={submitHandler} >
        <input type="search" name="search" id="search" placeholder="Search" onChange={(e) => setTerm(e.target.value)} value={term} />
      </form>
    </div>
  )
};

export default Search;
