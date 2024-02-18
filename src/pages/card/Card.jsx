import React from 'react';
import './card.scss';
import { FaDiscord } from "react-icons/fa6";
function Card() {
  const handleCopy = (event) => {
  
    const textarea = document.createElement('textarea');
    textarea.value = event.target.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };
  const  SethandleCopy = (event) => {
    const textarea = document.createElement('textarea');
    textarea.value = event.target.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };

  return (
    <div className='grid'>
      <p className='dre'> DiscordPrime <FaDiscord className='pri'/></p>
      <div className='lg-value'>$22,000</div>
      <div className='card-wrapper'>
        <div className='pin' onClick={handleCopy}>4411 1556 6776 6732</div>
        <p className='experity-text'>Experience:</p>
        <p className='text-sm'  onClick={SethandleCopy}>12/22</p>
        <div className='logo-shpe1'></div>
        <div className='logo-shpe2'></div>
      </div>
    </div>
  );
}

export default Card;