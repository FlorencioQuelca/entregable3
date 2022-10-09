
import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident';
import Location from './components/Location';
import getRandomNumber from './utils/GetRandomNumber';



function App() {
  
//  const random =getRandomNumber()
  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState()
  
  useEffect(() => {
    let id=getRandomNumber()
    if(searchInput){
     id=searchInput
    }
      const url =`https://rickandmortyapi.com/api/location/${id}`
      axios.get(url)
      .then( res =>{
              setLocation(res.data)
      })
      .catch(e=>console.log('error',e))
}, [searchInput])
const handleSubmit = (e) =>{
  e.preventDefault()
  setSearchInput(e.target.idlocation.value)
}
console.log(searchInput);
return (
    <div className="App">
     <h1>Rick and Morty</h1>
     <div>
       <form onSubmit={handleSubmit}>
           <input 
           placeholder='Enter another number from 1 to 126' 
           type="number" 
           id ='idlocation'/>
           <button>Search</button>
       </form>
     </div>
       <Location
       location={location}
       />
        {
          location?.residents.map( url =>(
            <CardResident
                url={url}
                key={url}
            />
          ))
        }



    </div>
  )
}
export default App
