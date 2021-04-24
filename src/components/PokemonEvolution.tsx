
import './PokemonEvolution.scss';

interface PokemonEvolutionProps {
  pokemon: any;
  onHandleClick: (pokemonId: number) => void;
}

export const PokemonEvolution = ({ pokemon, onHandleClick }: PokemonEvolutionProps) => {
  const handleClick = () => {
    onHandleClick(pokemon?.id);
  }

  return (
    <div className="pokemon-evolution">
      <div className="pokeball" onClick={handleClick}>
        <div className="pokeball-up"></div>
        <div className="pokeball-down"></div>
      </div>
    </div>
  )
}
