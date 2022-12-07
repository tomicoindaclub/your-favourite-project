import React from 'react'
import './AutoComplete.css'



function AutoComplete({name,setSearch,setAutoComp}) {
  return (
    <div>
        <option className='Option' value={name} onClick={(e) => {
           setSearch(e.target.value)
           setAutoComp([])
        }}>{name}</option>
    </div>
  )
}

export default AutoComplete