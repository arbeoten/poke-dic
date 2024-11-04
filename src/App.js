import React, { useState, useRef, useCallback } from 'react'

import './App.css'
import PokeMain from './components/PokeMain'
import PokeInsert from './components/PokeInsert'
import PokeCardList from './components/PokeCardList'
function App() {
   const [pokemons, setPokemons] = useState([
      {
         id: 1,
         name: '이상해씨',
         active: false,
         evo: '이상해풀',
      },
      {
         id: 2,
         name: '파이리',
         active: false,
         evo: '리자드',
      },
      {
         id: 3,
         name: '꼬부기',
         active: false,
         evo: '어니부기',
      },
   ])

   const nextId = useRef(4)

   function evoCheck(name) {
      switch (name) {
         case '파이리':
            return '리자드'
            break
         case '리자드':
            return '리자몽'
            break
         case '리자몽':
            return '파이리'
            break
         case '꼬부기':
            return '어니부기'
            break
         case '어니부기':
            return '거북왕'
            break
         case '거북왕':
            return '꼬부기'
            break
         case '이상해씨':
            return '이상해풀'
            break
         case '이상해풀':
            return '이상해꽃'
            break
         case '이상해꽃':
            return '이상해씨'
            break
         case '구구':
            return '피죤'
            break
         case '피죤':
            return '피죤투'
            break
         case '피죤투':
            return '구구'
            break
         case '피카츄':
            return '라이츄'
            break
         case '라이츄':
            return '피카츄'
            break
         case '미뇽':
            return '신뇽'
            break
         case '신뇽':
            return '망나뇽'
            break
         case '망나뇽':
            return '미뇽'
            break
      }
   }

   const onInsert = useCallback(
      (name) => {
         const tester = new Image()
         tester.src = `/images/${name}.png`
         tester.onload = () => {
            const pokemon = {
               id: nextId.current,
               name: name,
               evo: evoCheck(name),
               active: false,
            }
            setPokemons(pokemons.concat(pokemon))
            nextId.current += 1
         }
         tester.onerror = () => alert('존재하지 않는 포켓몬입니다')
      },
      [pokemons]
   )

   const onRemove = useCallback(
      (id) => {
         const removePokemon = pokemons.filter((pokemon) => {
            return pokemon.id !== id
         })
         setPokemons(removePokemon)
      },
      [pokemons]
   )

   const onToggle = useCallback(
      (id) => {
         const togglePokemons = pokemons.map((pokemon) => (pokemon.id === id ? { ...pokemon, active: !pokemon.active } : pokemon))
         setPokemons(togglePokemons)
      },
      [pokemons]
   )

   const onEvolution = useCallback(
      (id) => {
         const evoPokemons = pokemons.map((pokemon) => (pokemon.id === id ? { ...pokemon, name: evoCheck(pokemon.name), evo: evoCheck(evoCheck(pokemon.name)) } : pokemon))
         setPokemons(evoPokemons)
      },
      [pokemons]
   )
   return (
      <PokeMain>
         <PokeInsert onInsert={onInsert}></PokeInsert>
         <PokeCardList pokemons={pokemons} onRemove={onRemove} onToggle={onToggle} onEvolution={onEvolution}></PokeCardList>
      </PokeMain>
   )
}

export default App
