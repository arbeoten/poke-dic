import './css/PokeCardList.css'
import PokeCard from './PokeCard'

function PokeCardList({ pokemons, onRemove, onToggle, onEvolution }) {
   return (
      <div className="pokeCardList">
         {pokemons.map((pokemon) => (
            <PokeCard pokemon={pokemon} key={pokemon.id} onRemove={onRemove} onToggle={onToggle} onEvolution={onEvolution}></PokeCard>
         ))}
      </div>
   )
}

export default PokeCardList
