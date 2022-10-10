
import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident';
import Error from './components/Error';
import FilterList from './components/FilterList';
import Location from './components/Location';
import getRandomNumber from './utils/GetRandomNumber';



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
     <h1>Rick and Morty</h1>
       <form onSubmit={handleSubmit}>
           <input 
           placeholder='Enter another number from 1 to 126' 
           type="text" 
           id ='idlocation'
           onChange={handleChance}/>
           <button>Search</button>
           <FilterList
           suggestedList={suggestedList}
           setSearchInput={setSearchInput}
           />
       </form>
       {
          hasError ? <Error/>
          :
          < >
       <Location location={location}/>
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
