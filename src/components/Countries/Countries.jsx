import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllCountries, fetchAsyncCountries } from '../../features/CountriesSlice';
import { useSelector, useDispatch } from 'react-redux';
import './Countries.css'


const Countries = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncCountries())
  }, [])

  const countries = useSelector(getAllCountries)
  console.log(countries);

  return (
    <section className="grid">
      {
        countries.map((country) => {
          return (
            <Link to={`/countries/${country.name.common}`} key={country.name.common}>
              <article>
                <div className="flag__section">
                  <img src={country.flags.svg} alt="" />
                </div>

                <div className="details">
                  <h2>{country.name.common}</h2>
                  <h3>Population: <span>{country.population}</span></h3>
                  <h3>Region: <span>{country.region}</span></h3>
                  <h3>Capital: <span>{country.capital}</span></h3>
                </div>
              </article>
            </Link>
          )
        })
      }
    </section>
  )
}

export default Countries