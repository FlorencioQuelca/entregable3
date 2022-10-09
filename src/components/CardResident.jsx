
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles/cardResident.css'
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
    <article className='resident'>
       <header className='resident__header'>
          <img src={resident?.image} alt="img" />
            <div>
              <div className='circle'></div>
              <span>{resident?.status}</span>
            </div>  
       </header>
        <section className='resident__section'>
        <h3 className='resident__title'>title: {resident?.name}</h3>
        <ul className='resident__ul'>
        <li className='resident__li'><span className='resident__span'>Sprecie :</span> {resident?.species}</li>
        <li className='resident__li'><span className='resident__span'>Origin : </span> {resident?.origin.name}</li>
        <li className='resident__li'><span className='resident__span'>Episodes where appear :</span>{resident?.episode.length}</li>
        </ul>
        </section>
    </article>
  )
}
export default CardResident