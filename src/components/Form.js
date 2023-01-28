import React, { useRef, useState } from 'react'
import Maps from './Maps';
import './Form.css'



function Form() {
  window.ymaps.ready(init);
  function init() {
      var suggestView = new window.ymaps.SuggestView('suggest');
      var suggestView2 = new window.ymaps.SuggestView('suggest_2');
  }
  
  const [point, setPoint] = useState([])
  const adressRef = useRef()
  const cityRef = useRef()
  const API_key = '16699af3-e803-438d-9183-1605c6422fe3'
  const url = `https://geocode-maps.yandex.ru/1.x/?apikey=${API_key}&format=json&geocode=`

  const handleGetGeoAdress = (adress, e) => {
    if (adress.current.value && e.keyCode === 13) {
      fetch(`${url}${adress.current.value}`)
      .then(res => res.json())
      .then(result => {
        setPoint(result.response.GeoObjectCollection.featureMember)
      }) 
      adressRef.current.value = ''
    }
  }

  const handleGetGeoCity = (adress, e) => {
    if (adress.current.value && e.keyCode === 13) {
      fetch(`${url}${adress.current.value}`)
      .then(res => res.json())
      .then(result => {
        setPoint(result.response.GeoObjectCollection.featureMember)
      })
      cityRef.current.value = ''
    }
  }

  const handleChangeAdress = (adress) => {
    fetch(`${url}${adress}`)
      .then(res => res.json())
      .then(result => {
        setPoint(result.response.GeoObjectCollection.featureMember)
      })
  }

  const handleChangeCity = (adress) => {
    fetch(`${url}${adress}`)
      .then(res => res.json())
      .then(result => {
        setPoint(result.response.GeoObjectCollection.featureMember)
      })
  }

  const handleButton = () => {
    cityRef.current.value = ''
    adressRef.current.value = ''
    alert("Данные успешно отправлены")
    setPoint([])
  }
  return (
    <div className='form'>
        <h1>Где вы находитесь или будете принимать волонтёров</h1>
        <p>Адрес</p>
        <input type='text' ref={adressRef} id='suggest' onChange={() => handleChangeAdress(adressRef.current.value)} onKeyDown={(e) => handleGetGeoAdress(adressRef, e) }/>
        <p>Ближайший к месту город</p>
        <input type='text' ref={cityRef} id='suggest_2' onChange={() => handleChangeCity(adressRef.current.value)} onKeyDown={(e) => handleGetGeoCity(cityRef, e) }/>
        <Maps point={point} API_key={API_key}/>
        <button className='form_button' onClick={() => handleButton()}>Дальше</button>
    </div>  
  )
}

export default Form
