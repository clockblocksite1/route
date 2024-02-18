import React from 'react';
import "./navi.scss";

function Navi() {
  return (
    <div className='navi'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='search...' />
          
        </div>
      </div>
    </div>
  );
}

export default Navi;