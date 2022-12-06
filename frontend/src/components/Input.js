import React, { useState } from 'react'


function Input() {

    const [search, setSearch] =useState("")
    const [currentData, setCurrentData] = useState([])
    const [autoComp, setAutoComp] = useState([]);



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

    console.log(currentData)
    console.log(autoComp)
  return (
    
    <div>
        <div>
            <input type="text" name="seacrh" onChange={handleChange} value={search} />

            <button onClick={handleClick}>seacrh</button>


            {autoComp[0] ? <option>{autoComp[0].name}</option> : null}
            {autoComp[1] ? <option>{autoComp[1].name}</option> : null}
            {autoComp[2] ? <option>{autoComp[2].name}</option> : null}


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