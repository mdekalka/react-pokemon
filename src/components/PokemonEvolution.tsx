import { useDispatch, useSelector } from 'react-redux';

import { fetchPokemonSpecies, selectEvolution } from '../slices/evolutionSlice';
import { RootState } from '../store/store';
import { PokeBall } from './PokeBall';
import { PokemonEvolutionForms } from './PokemonEvolutionForms';

import './PokemonEvolution.scss';

interface PokemonEvolutionProps {
  pokemon: any;
}

export const PokemonEvolution = ({ pokemon }: PokemonEvolutionProps) => {
  const dispatch = useDispatch();
  const evolutionData = useSelector((state: RootState) => selectEvolution(state, pokemon.name));
  const isFinished = evolutionData?.state === 'finished';

  const handleClick = () => {
    if (evolutionData?.fetching || isFinished) return;
    
    dispatch(fetchPokemonSpecies(pokemon.name));
  }

  return (
    <div className="pokemon-evolution">
      {<PokeBall fetching={evolutionData?.fetching} finished={isFinished} onClick={handleClick} />}
      <PokemonEvolutionForms evolution={evolutionData?.evolution} />
    </div>
  )
}
