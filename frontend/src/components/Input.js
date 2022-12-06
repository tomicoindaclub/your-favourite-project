import React, { useState } from 'react'


function Input() {

    const [search, setSearch] =useState("")
    const [currentData, setCurrentData] = useState([])
    const [img, setImg] = useState();



    const apiKey= `0c183950ab4549da8fb115413220512`
    const fetchUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${search}&aqi=no`

    
    

    const handleChange =  (e) =>{
        setSearch(e.target.value)
    }

    const handleClick =  () =>{
        console.log(search)
            fetch(fetchUrl)
                    .then(res =>  res.json())
                    .then(data =>  setCurrentData(data))
        
    

                   
    } 

    console.log(currentData)

  return (
    
    <div>
        <div>
            <input type="text" name="seacrh" onChange={handleChange} value={search} />

            <button onClick={handleClick}>seacrh</button>

            {currentData.location ? <h1>{currentData.location.name}</h1> : null}
            {currentData.location ? <h2>{currentData.location.country}</h2> : null}
            {currentData.current ? <h1>Temp:  {currentData.current.temp_c} °c</h1> : null}
            {currentData.current ? <h1>Wind: {currentData.current.wind_kph
} KM/H</h1> : null}
            {currentData.current ? <h1>Humidity: {currentData.current.humidity
}%</h1> : null}

           
        </div>
    </div>
  )
}

export default Input