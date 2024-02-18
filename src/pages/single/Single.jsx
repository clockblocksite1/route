import React, { useState } from 'react';
import "./single.scss";
import Navbar from '../../components/navbar/Navbar';
import Navi from '../../components/sidebar/Navi';
import { BsFillSendArrowDownFill } from "react-icons/bs";
import { AiFillSmile } from "react-icons/ai";
import { FaDiscourse } from "react-icons/fa6";
import { MdBroadcastOnHome } from "react-icons/md";
import { GiBoltDrop } from "react-icons/gi";
import { CiUser } from "react-icons/ci";
import Modal from '../../components/Modal';
import Modal2 from '../../components/Modal2';
import Modal3 from '../../components/Modal3';
import Modal4 from '../../components/Modal4';

function Single() {
  const [ModalOpen,setModalOpen]=useState(false);
  const [ModalOpen2,setModalOpen2]=useState(false);
  const [ModalOpen3,setModalOpen3]=useState(false);
  const [ModalOpen4,setModalOpen4]=useState(false);
  return (
    <div className='home'>
      <Navbar/>
      <div className='homeContainer'>
        <Navi/>

        <h1 className='title'>Каталог</h1>
       <div className='widget'>
        <div className='cot'>NITRO BASIC</div>
       <div className='coins'>129,99грн./ месяц</div>
       <div className='file'> <BsFillSendArrowDownFill  className='gat'/>Отправляйту файлы размером 50МБ</div>
       <div className='em'><AiFillSmile className='gat'/>Пользоватские эмодзи где угодно</div>
       <div className='os'><FaDiscourse className='gat'/>Особый значок Nirto в профиле</div>
       <button className='bram' onClick={()=>setModalOpen(true)}>Подписаться на Basic</button>
      
       <div className='rom'>
        <div className='run'>NITRO</div>
        <div className='git'>323,99грн. / месяц</div>
        <div className='get'> <BsFillSendArrowDownFill className='gat'/>Отправляйту файлы размером 500МБ</div>
        <div className='gut'> <AiFillSmile className='gat'/>  Неограниченные суперреакции</div>
        <div className='stream'><MdBroadcastOnHome className='gat'/>Стриминг видео в разрешении HD </div>
        <div className='boost'> <GiBoltDrop className='gat'/>2 буста сервера</div>
        <div className='voz'><CiUser className='gat'/>Возможности для персонализации профиля</div>
        <button className='nit' onClick={()=>setModalOpen2(true)}>Подписаться на Nitro</button>
      
       </div>
       <div className='rog'>
        <div className='hark'>NITRO BASIC</div>
        <div className='god'>1499,00грн. /год</div>
        <div className='file'> <BsFillSendArrowDownFill  className='gat'/>Отправляйту файлы размером 50МБ</div>
       <div className='em'><AiFillSmile className='gat'/>Пользоватские эмодзи где угодно</div>
       <div className='os'><FaDiscourse className='gat'/>Особый значок Nirto в профиле</div>
       <button className='bram'  onClick={()=>setModalOpen3(true)} >Подписаться на Basic</button>
       </div>
       <div className='reg'>
       <div className='run'>NITRO</div>
        <div className='git'>3499,00 грн./ год</div>
        <div className='get'> <BsFillSendArrowDownFill className='gat'/>Отправляйту файлы размером 500МБ</div>
        <div className='gut'> <AiFillSmile className='gat'/>  Неограниченные суперреакции</div>
        <div className='stream'><MdBroadcastOnHome className='gat'/>Стриминг видео в разрешении HD </div>
        <div className='boost'> <GiBoltDrop className='gat'/>2 буста сервера</div>
        <div className='voz'><CiUser className='gat'/>Возможности для персонализации профиля</div>
        <button className='nit' onClick={()=>setModalOpen4(true)}>Подписаться на Nitro</button>
       </div>
        </div>
        {ModalOpen &&<Modal closeModal={setModalOpen}/>}
        {ModalOpen2 &&<Modal2 closeModal2={setModalOpen2}/>}
        {ModalOpen3 &&<Modal3 closeModal3={setModalOpen3}/> }
        {ModalOpen4 &&<Modal4 closeModal4={setModalOpen4}/>}
      </div>
    </div>
  
  );
}

export default Single;