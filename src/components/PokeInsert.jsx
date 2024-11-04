import './css/PokeInsert.css'
import React, { useState, useCallback } from 'react'
import { FaSearch } from 'react-icons/fa'

function PokeInsert({ onInsert }) {
   const [value, setValue] = useState('')
   const onChange = (e) => setValue(e.target.value)
   const onSubmit = useCallback(
      (e) => {
         e.preventDefault()
         onInsert(value)
         setValue('')
      },
      [value, onInsert]
   )
   return (
      <form onSubmit={onSubmit} className="pokeInsert">
         <input type="text" placeholder="포켓몬 이름 입력" value={value} onChange={onChange} />
         <button type="submit">
            <FaSearch />
         </button>
      </form>
   )
}

export default PokeInsert
