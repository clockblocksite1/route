import React from "react";
import "./Modal3.css"
function Modal3({closeModal3}) {
 
    const  GethandleCopy = (event) => {
        const textarea = document.createElement('textarea');
        textarea.value = event.target.innerText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      };
      
      
  return (
    <div className="modal-container">
      <div className="modal3">
      <button className="close" onClick={()=>closeModal3(false)}>X</button>
        <div className="kup">Купить NITRO BASIC</div>
        <tr />
        <div className="pt">
          Nitro Basic — это новейший и самый дешевый вариант подписки. Стоит 2,99 доллара в месяц — это на 7 долларов меньше, чем полная версия, и на 2 доллара меньше, чем подписка Nitro Classic. Подписка даст вам увеличенный лимит на размер загружаемого файла до 50 МБ, настраиваемые видеофоны и, конечно же, возможность использовать любые смайлики на любом сервере или в личном сообщении. Nitro Basic также дает вам доступ как к стикерам Discord, чего очень не хватает в преимуществах Nitro Classic.
        </div>
        <div className="sr">Вставить эту ссылку на странице Главная:</div>
        <div className="ss" onClick={GethandleCopy}>http/discord-basic/years</div>
      
      </div>
    </div>
  );
}

export default Modal3;