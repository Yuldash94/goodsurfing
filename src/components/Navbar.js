import React from 'react'
import {BsPinMap, BsCalendar4Week, BsPersonCheck, BsListTask, BsListUl, BsArrowLeft } from 'react-icons/bs'
import {MdChecklistRtl} from 'react-icons/md'
import {SlPencil} from 'react-icons/sl'
import './Navbar.css'

function Navbar() {

  const navi = [
    {
      icon: <BsPinMap/>,
      title: 'Где',
      id: Math.random()
    },
    {
      icon: <BsCalendar4Week/>,
      title: 'Когда',
      id: Math.random()
    },
    {
      icon: <BsPersonCheck/>,
      title: 'Кому',
      id: Math.random()
    },
    {
      icon: <BsListUl/>,
      title: 'Описание',
      id: Math.random()
    },
    {
      icon: <BsListTask/>,
      title: 'Что делать',
      id: Math.random()
    },
    {
      icon: <MdChecklistRtl/>,
      title: 'Условия',
      id: Math.random()
    },
    {
      icon: <SlPencil/>,
      title: 'Последние штрихи',
      id: Math.random()
    },
    {
      icon: <BsArrowLeft/>,
      title: 'Назад',
      id: Math.random(2)
    },
  ]

  return (
    <div className='navbar'>
      <div className='nav_items'>
        {navi.map(item => (
          <div key={item.id} className='nav_item'>
            {item.icon}
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <div className='nav_support'>
          <div className='support_avatar'></div>
          <h3>Кристина</h3>
          <p>Ваш персональный помощник по работе с данной системой</p>
          <button className='support_button'>Написать</button>
          <p>E-mail <a href='mailto:support@goodsurfing.org'>support@goodsurfing.org</a></p>
      </div>
    </div>
  )
}

export default Navbar