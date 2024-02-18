import React from 'react';
import "./login.scss";
import Navbar from '../../components/navbar/Navbar';
import Navi from '../../components/sidebar/Navi';
import Card from '../card/Card';
function Login() {
  return (
    <div className='login'>
    <Navbar/>
    <div className='loginContainer'>
      <Navi/>
      <h1 className='title'>Главная</h1>
      <Card/>
      <div className='let'>
        <input className='lete' placeholder='номер нашой карточки' />
        <input className='lete' placeholder='номер вашой карточки'/>
        <input className='lete' placeholder='ссылка каталога'/>
        <input className='lete' placeholder='сума'/>
      </div>
      <button className='btn'>Оплатить</button>
      
    </div>
  </div>
  );
}

export default Login;