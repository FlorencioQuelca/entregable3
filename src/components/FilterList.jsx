import React from 'react'
import './styles/listitem.css'
const FilterList = ({suggestedList,setSearchInput}) => {
const handleClick =(id) =>{
    setSearchInput(id)
}
return (
     <ul className='filter_list'>
        {
            suggestedList?.map(location =>(
                <li  className='filter__item' onClick={()=>handleClick(location.id)} key={location.id}>{location.name}</li>
            ))
        }
     </ul>
  )
}

export default FilterList