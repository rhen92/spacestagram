import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <section>
    <div className='loading-styling'>
      <h1>Loading Astronomy Pictures...</h1>
      <div className='loader'>
      <div className='loader-inner'>
      </div>
      </div>
    </div>
    </section>
  )
}

export default Loading;
