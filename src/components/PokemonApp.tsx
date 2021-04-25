import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPokemons, selectPokemons, selectFetching, selectUrls } from '../slices/pokemonsSlice';
import { PokemonList } from './PokemonList';
import { Spinner } from './common/Spinner';
import { RootState } from '../store/store';

import './PokemonApp.scss';

// Actually funny story, when we load x items from API it might be a situation where we didn't load the final form of last pokemon,
// so we preload x + y pokemons to have all evolution forms on render.
const GRID_SIZE = 8;

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state: RootState) => selectPokemons(state, GRID_SIZE));
  const fetching = useSelector(selectFetching);
  const urls = useSelector(selectUrls);

  const loadPokemons = (direction: number) => {
    const options = direction ? { next: true } : { previous : true };

    dispatch(fetchPokemons(options));
  }

  useEffect(() => {
    dispatch(fetchPokemons(null));
  }, []);

  return (
    <div className="pokemon-app">
      {fetching && <Spinner />}
      {(!fetching && !!pokemons?.length) && (
        <>
          <h2>Pokemon application based on <a href="https://pokeapi.co/">Pokémon API</a></h2>
          <PokemonList pokemons={pokemons} onPokemonsLoad={loadPokemons} urls={urls} fetching={fetching} />
        </>
      )}
    </div>
  )
}
