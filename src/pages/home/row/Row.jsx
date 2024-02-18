import React from 'react'
import "./row.scss"
import Navbar from '../../../components/navbar/Navbar'
import Navi from '../../../components/sidebar/Navi'

function Row() {
  const  RethandleCopy = (event) => {
    const textarea = document.createElement('textarea');
    textarea.value = event.target.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };
  return (
    <div className='home'>
      <Navbar/>
      <div className='homeContainer'>
        <Navi/>
        <h1 className='title'>Настройки</h1>
       <div className='nas'>Добрый день! Если ваша оплата не прошла успешно, мы рекомендуем вам обратиться в наш Telegram, где мы сможем помочь вам разобраться с возникшей проблемой. Если у вас возникли какие-либо другие вопросы или затруднения, мы с радостью окажем вам поддержку и помощь</div>
      <div className='sss'>Ссылка на тг:</div>
      <div className='cod' onClick={RethandleCopy}>@DiscordPrime</div>
      </div>
    </div>
  )
}

export default Row