import { useState, useCallback } from 'react'
import './css/PokeCard.css'
import classnames from 'classnames'

function PokeCard({ pokemon, onRemove, onToggle, onEvolution }) {
   const { name, id, evo, active } = pokemon
   const img_src = '/images/' + name + '.png'

   const [maxEvo, setMaxEvo] = useState('진화')
   const chkMaxEvo = (evo) => {
      evo == '리자몽' || evo == '거북왕' || evo == '이상해꽃' || evo == '피죤투' || evo == '라이츄' || evo == '망나뇽' ? setMaxEvo('처음으로') : setMaxEvo('진화')
   }

   return (
      <div className="pokeCard">
         <div className="pokeName">
            <img
               src={img_src}
               className={classnames({ active })}
               alt="#"
               onDoubleClick={() => {
                  onToggle(id)
               }}
            />
         </div>
         <div className="pokeContents">
            <p>{name}</p>
            <p
               onClick={() => {
                  onEvolution(id)
                  chkMaxEvo(evo)
               }}
            >
               {maxEvo}
            </p>
            <p
               onClick={() => {
                  onRemove(id)
               }}
            >
               삭제
            </p>
         </div>
      </div>
   )
}

export default PokeCard
