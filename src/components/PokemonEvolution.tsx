import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPokemonSpecies, selectEvolution } from '../slices/evolutionSlice';
import { RootState } from '../store/store';
import { PokeBall } from './PokeBall';

import './PokemonEvolution.scss';

interface PokemonEvolutionProps {
  pokemon: any;
}

export const PokemonEvolution = ({ pokemon }: PokemonEvolutionProps) => {
  const dispatch = useDispatch();
  const evolutionData = useSelector((state: RootState) => selectEvolution(state, pokemon.id));
  const evolutionChain = evolutionData?.evolution?.chain;

  const handleClick = () => {
    if (evolutionData?.fetching || evolutionChain) return;
    
    dispatch(fetchPokemonSpecies(pokemon.id));
  }

  return (
    <div className="pokemon-evolution">
      {<PokeBall fetching={evolutionData?.fetching} finished={!!evolutionChain} onClick={handleClick} />}
    </div>
  )
}
