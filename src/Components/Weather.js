import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ area }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.weatherapi.com/v1/current.json?key=732975e0faff4e39922143726232608&q=${area}&aqi=yes`)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="card text-bg-dark">
        <img src='https://i.pinimg.com/originals/70/e5/13/70e5131d8aa97692200f16baf856bd05.jpg' style={{backgroundRepeat:'no-repeat',height:'100%',backgroundSize:'cover',backgroundPosition:'center'}}
          className="card-img"
          alt={data.current.icon}
        />
        <div className="card-img-overlay">
          <h2 className="card-title d-flex justify-content-center">
            {data.location.name} | {data.location.country}
          </h2>
          <span className="d-flex justify-content-center">
            <img src={data.current.condition.icon} alt="" srcSet="" />
          </span>
          <h5 className="card-title d-flex justify-content-center">
            {data.location.lat},{data.location.lon} | {data.location.localtime}
          </h5>
          <div className="d-flex justify-content-center">
            <span className="">
              {data.current.temp_c}
              <sup>o</sup>C | {data.current.temp_f}
              <sup>o</sup>F
            </span>
          </div>
          <h1 className="d-flex justify-content-center" style={{ color: 'orange' }}>
            {data.current.condition.text}
          </h1>
          <hr></hr>
          <div className="d-flex justify-content-around my-5">
            <h3 style={{ border: '1px solid black' }}>
              <i className="fa-solid fa-droplet mx-2"></i>
              {data.current.humidity}
            </h3>
            <h3 style={{ border: '1px solid black' }}>
              <i className="fa-solid fa-cloud mx-2"></i>
              {data.current.cloud}
            </h3>
            <h3 style={{ border: '1px solid black' }}>
              <i className="mx-2">air quality</i>
              {data.current.air_quality.pm10}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
