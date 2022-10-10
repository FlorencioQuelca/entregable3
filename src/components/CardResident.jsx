
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './styles/cardResident.css'
const CardResident = ({url}) => {

const [resident, setResident] = useState()

useEffect(() => {
   if(url){
    axios.get(url).then(res =>{
        setResident(res.data)
    }).catch(e => console.log('error : ',e))
  }
}, [])
  return (
    <article className='card'>
       <header className='card__header'>
          <img className='card__img' src={resident?.image} alt="" />
            <div className='card__container-status'>
              <div className={`card__circle-status ${resident?.status}`}></div>
              <span>{resident?.status}</span>
            </div>  
       </header>
        <section className='cart__body'>
        <h3 className='card__name'>title: {resident?.name}</h3>
        <ul className='card__list'>
        <li className='card__item'><span className='card__span'>Sprecie :</span> {resident?.species}</li>
        <li className='card__item'><span className='card__span'>Origin : </span> {resident?.origin.name}</li>
        <li className='card__item'><span className='card__span'>Episodes where appear :</span>{resident?.episode.length}</li>
        </ul>
        </section>
    </article>
  )
}
export default CardResident