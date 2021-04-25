import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPokemons, selectPokemons, selectFetching, selectUrls } from '../slices/pokemonsSlice';
import { PokemonList } from './PokemonList';
import { Spinner } from './common/Spinner';

import './PokemonApp.scss';

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(selectPokemons);
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
