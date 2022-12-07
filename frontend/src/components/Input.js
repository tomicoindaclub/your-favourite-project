import React, { useState } from 'react'
import AutoComplete from './AutoComplete';


function Input() {

    const [search, setSearch] =useState("")
    const [currentData, setCurrentData] = useState([])
    const [autoComp, setAutoComp] = useState([]);
    const [imageData, setImageData] = useState([])


 

    






    

    const imageApiKey =
"563492ad6f917000010000019fe6895bc4de4b2f816d02c64408d69f";

    const apiKey = `0c183950ab4549da8fb115413220512`
    const fetchUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${search}&aqi=no`

    const autoComplete = `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${search}&aqi=no`
    
    

    const handleChange =  (e) =>{
        setSearch(e.target.value)



        fetch(autoComplete)
        .then(res =>  res.json())
        .then(data =>  setAutoComp(data))
    }

    const handleClick =  () =>{
        console.log(search)
            fetch(fetchUrl)
                    .then(res =>  res.json())
                    .then(data =>  setCurrentData(data))
                   
    } 







    fetch(`https://api.pexels.com/v1/search?query=${search}&per_page=1`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `${imageApiKey}`,
          },
         })
          .then((response) => response.json())
          .then((data) => console.log(data))
   /*          let imgURL = imageData.photos[0].src.origi;  */ 









    console.log(currentData)
    console.log(autoComp)
  return (
     <>
    <div>
        <div>
            <input type="text" name="seacrh" onChange={handleChange} value={search} />

            <button onClick={handleClick}>seacrh</button>

            <div>
             {autoComp.length > 0 && autoComp.map((autoC) => <AutoComplete name={autoC.name} setSearch={setSearch} setAutoComp={setAutoComp}/> )}
        </div>  
       


            {currentData.location ? <h1>{currentData.location.name}</h1> : null}
            {currentData.location ? <h2>{currentData.location.country}</h2> : null}
            {currentData.current ? <h1>Temp:  {currentData.current.temp_c} °c</h1> : null}
            {currentData.current ? <h1>Wind: {currentData.current.wind_kph
} KM/H</h1> : null}
            {currentData.current ? <h1>Humidity: {currentData.current.humidity
}%</h1> : null}

           
        </div>
    </div>

    </>
  )
}

export default Input