import React from "react";
import "./Cord.css"
function Cord({closeCord}){
    return(
        <div className="cord-container">
            <div className="cord">
            <button className="closeCord" onClick={()=>closeCord(false)}>X</button>
            <div className="op">Оплата заказа</div>
            <div className="rew">Мы обработали ваш заказ, теперь переведите нужную суму на нашую карточку для получения товара, после этого подождите  минуту для передачи даних.</div>
          
            </div>
        </div>
    )
}
export default Cord;