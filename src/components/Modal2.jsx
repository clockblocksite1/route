import React from "react";
import "./Modal2.css";
function Modal2({closeModal2}) {
 
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
      <div className="modal">
        <button className="close" onClick={()=>closeModal2(false)}>X</button>
        <div className="kup">Купить NITRO </div>
        <tr />
        <div className="pt">
        Discord Nitro — это платная подписка Discord, которая даёт доступ к персонализированным эмодзи с любых серверов, в которых вы состоите, стикерам, персонализированному тегу, анимированному аватару и т.д.
        </div>
        <div className="sr">Вставить эту ссылку на странице Главная:</div>
        <div className="ss" onClick={GethandleCopy}>http/discord-nitro/mouth</div>
      
      </div>
    </div>
  );
}

export default Modal2;