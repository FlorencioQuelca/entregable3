
import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident';
import Error from './components/Error';
import FilterList from './components/FilterList';
import Location from './components/Location';
import getRandomNumber from './utils/GetRandomNumber';
import './components/styles/formsearch.css'
function App() {
  
  //  const random =getRandomNumber()
  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState('')
  const [suggestedList, setSuggestedList] = useState()
  const [hasError, setHasError] = useState(false)
  useEffect(() => {
    let id=getRandomNumber()
    if(searchInput){
     id=searchInput
    }
      const url =`https://rickandmortyapi.com/api/location/${id}`
      axios.get(url)
      .then( res =>{
        setLocation(res.data)
        setHasError(false)
      
            })
            .catch(e=>  setHasError(true))
          }, [searchInput])

const handleSubmit = (e) =>{
  e.preventDefault()
  setSearchInput(e.target.idlocation.value)
}
const handleChance =(e)=>{
  const URL = `https://rickandmortyapi.com/api/location?name=${e.target.value}`
  if(e.target.value===''){
    return setSuggestedList()
  }else{
    axios.get(URL).then(res=>{
      setSuggestedList(res.data.results)
      setHasError(false)
    }).catch(e=>setHasError(true))
  }
}
return (
    <div className="App">
      <div className='App-head'>
        <h1  className='App__title'>Rick and Morty</h1>
      </div>
      
       <form className='form-container' onSubmit={handleSubmit}>
           <input  className='form__input'
           placeholder='Enter another number from 1 to 126' 
           type="text" 
           id ='idlocation'
           onChange={handleChance}/>
           <button className='form__btn'>Search</button>
           <div className='form__list'>
           <FilterList
           suggestedList={suggestedList}
           setSearchInput={setSearchInput}
           />
           </div>
       </form>
        {
          hasError ?
           <div className='Error'>
          
             <Error/>
           </div>
          :
          <>
         <div className='location-container'> 
         <Location  location={location}/>
         </div>
       <div className='card-container' >
        {
          location?.residents.map( url =>(
            <CardResident
            url={url}
            key={url}
            />
            ))

          }
          </div>

          </>
        }


    </div>
  )
}
export default App
