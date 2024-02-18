import React from 'react';
import "./new.scss";
import Navbar from '../../components/navbar/Navbar';
import Navi from '../../components/sidebar/Navi';

function New() {
  return (
    <div className='home'>
    <Navbar/>
    <div className='homeContainer'>
      <Navi/>
      <h1 className='title'>Условия</h1>
      <div className='fram'>Добрый день, я помогу вам </div>
      <div className='hot'>
        <div className='het'>
          1. Зайди в каталог
        </div>
      </div>
      <div className='et'>
        <div className='we'>
          2. Ты должен вибрать какой именно товар тебе нужен
        </div>
      </div>
      <div className='po'>
        <div className='q'>
        3. Потом скопируй ссылку товара которую ты вибрал
        </div>
      </div>
      <div className='tu'>
        <div className='y'>
         4. После этого переходи на страницу главная и вставляй дание
        </div>
      </div>
      <div className='x'>
        <div className='n'>
      5. Следуйщим шагом  ты должен со своей карточки на нашую перекинуть нужную суму
        </div>
      </div >
      <div className='c'>
        <div className='wr'>
      6. Передача даних займет минуту, после чего вам на акаунт прейдет товар
      </div>
      </div>
      <div className='ew'>
        <div className='ty'>7. Если оплата не пройшла вам следует обратиться в телеграмм-поддержку</div>
      </div>
    </div>
  </div>
  );
}

export default New;