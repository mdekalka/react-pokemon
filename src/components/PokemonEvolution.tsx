import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchPokemonSpecies } from '../slices/evolutionSlice';

import './PokemonEvolution.scss';

interface PokemonEvolutionProps {
  pokemon: any;
}

export const PokemonEvolution = ({ pokemon }: PokemonEvolutionProps) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchPokemonSpecies(pokemon.id));
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
