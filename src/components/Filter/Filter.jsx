import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Filter.css';
import { fetchSearchedContinents, fetchSearchedCountryDetail } from '../../features/CountriesSlice';


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
        <input type="search" name="search" id="search" placeholder="Search Countries" onChange={(e) => setTerm(e.target.value)} value={term} />
      </form>
    </div>
  )
};

const Continents = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const submitHandlerr = (e) => {
    e.preventDefault();
    dispatch(fetchSearchedContinents(term))
    setTerm('')
  }

  return (
    <div className="Search">
      <form className="form_input" onSubmit={submitHandlerr} >
        <input type="search" name="search" id="search" placeholder="Try Writing asia " onChange={(e) => setTerm(e.target.value)} value={term} />
      </form>
    </div>
  )
};


export default Search;
export { Continents };
