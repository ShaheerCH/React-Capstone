import React from 'react';
import Countries from '../Countries/Countries';
import Search from '../Filter/Filter';
import { Continents } from '../Filter/Filter';



const Body = () => {
  return (
    <div>
      <Search />
      <Continents />
      <Countries />
    </div>
  )
}

export default Body