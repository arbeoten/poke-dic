import './css/PokeMain.css'

function PokeMain({ children }) {
   return (
      <div className="pokeMain">
         <div className="pokeMainTitle">
            <h2>포켓몬 도감</h2>
         </div>
         <div className="pokeMainContent">{children} </div>
      </div>
   )
}

export default PokeMain
