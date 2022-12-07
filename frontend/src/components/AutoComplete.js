import React from 'react'




function AutoComplete({name,setSearch,setAutoComp}) {
  return (
    <div>
        <option value={name} onClick={(e) => {
           setSearch(e.target.value)
           setAutoComp([])
        }}>{name}</option>
    </div>
  )
}

export default AutoComplete