import React from 'react';
import "./home.scss";
import Navbar from '../../components/navbar/Navbar';
import Navi from '../../components/sidebar/Navi';
import Card from '../card/Card';
import axios from 'axios';
import Cord from '../../components/Cord';
import { useState, useEffect } from 'react';
function Home() {
  const [post, setPost] = useState({
    number:'',
    exper:'',
    title: '',
    discord:'',
    suma:''

  });

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    axios.put('https://jsonplaceholder.typicode.com/posts/1', { post })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };
  const [cordOpen,setCordOpen]=useState(false)
  return (
   
    <div className='home'>
      <Navbar/>
      <div className='homeContainer'>
        <Navi/>
        <h1 className='title'>Главная</h1>
        <Card/>
        <form onSubmit={handleSubmit}>
        <div className='let'>
          <input name='number' onChange={handleInput} className='lete' placeholder='номер нашой карточки' />
          <input name='exper' onChange={handleInput} className='lete' placeholder='Experience'/>
          <input name='title' onChange={handleInput} className='lete' placeholder='ссылка каталога'/>
          <input name='discord' onChange={handleInput} className='lete' placeholder='ваш дискорд'/>
          <input name='suma' onChange={handleInput} className='lete' placeholder='сума'/>
        </div>
        <button className='btn' onClick={()=>setCordOpen(true)}>Продолжить</button>
        </form>
        {cordOpen &&<Cord closeCord={setCordOpen}/>}
      </div>
    </div>
  );
}

export default Home;