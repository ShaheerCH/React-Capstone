import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncCountryDetail, getSelectedCountry } from '../../features/CountriesSlice';
import './Country.css';

const Country = () => {

  const { name } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncCountryDetail(name))
  }, [])

  const countryData = useSelector(getSelectedCountry);
  console.log(countryData)

  return (

    <>
      {
        countryData && <div className="renderCountry">
          <Link to="/">
            <button className='back_button'> <i class="fa-solid fa-angle-left"></i></button>
          </Link>

          <div className="country">

            <div className="country__flag">
              <img src={countryData[0]?.flags?.svg} alt="" />
            </div>

            <div className="country__details">
              <div className="main">
                <div className="left">
                  <h1>{countryData[0]?.name.common}</h1>
                  <p> <span className='ttl'>Region:</span>   {countryData[0]?.region}</p>
                  <p><span className='ttl'>Sub-Region:</span> {countryData[0]?.subregion}</p>
                  <p><span className='ttl'>Capital: </span>  {countryData[0]?.capital[0]}</p>
                  <p><span className='ttl'>Population:</span> {countryData[0]?.population}</p>
                  <p><span className='ttl'>Area: </span>  {countryData[0]?.area} km2</p>
                </div>
              </div>

              <div className="border_countries">
                <p className='border__country'><span className='ttl'>Continents:</span> <span>{countryData[0]?.continents[0]}</span></p>
              </div>
            </div>
          </div>
        </div>
      }
    </>




  )
}

export default Country