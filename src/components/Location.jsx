import React from 'react'
const Location = ({location}) => {



  return (
   <article className='location'>
        <h2 className='location__title'>{location?.name}</h2>
        <ul className='location__ul'>
        <li className='location__li'><span className='location__span'>Type: </span>{location?.type}</li>
        <li className='location__li'><span className='location__span'>Dimension: </span>{location?.dimension}</li>
        <li className='location__li'><span className='location__span'>Population: </span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default Location