import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { fetchPokemons, selectPokemons, selectFetching, selectUrls } from '../slices/pokemonsSlice';
import { PokemonList } from './PokemonList';
import { Spinner } from './common/Spinner';
import { ArrowButton } from './common/ArrowButton';


import './PokemonApp.scss';

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pageNumber } = useParams<{ pageNumber: string }>();

  const pokemons = useSelector(selectPokemons);
  const fetching = useSelector(selectFetching);
  const urls = useSelector(selectUrls);

  const loadPokemons = (direction: number) => {
    const page = direction ? parseInt(pageNumber) + 1 : parseInt(pageNumber) - 1;

    history.push(`/${page}`);
  }
  const loadPrevPokemons = useCallback(() => loadPokemons(0), [pageNumber]);
  const loadNextPokemons = useCallback(() => loadPokemons(1), [pageNumber]);

  useEffect(() => {
    dispatch(fetchPokemons({ page: parseInt(pageNumber) }));
  }, [pageNumber]);

  return (
    <div className="pokemon-app">
      {fetching && <Spinner />}
      {(!fetching && !!pokemons?.length) && (
        <>
          <h2>Pokemon application based on <a href="https://pokeapi.co/">Pokémon API</a></h2>
          {urls.previousUrl && (
            <ArrowButton
              className="pokemon-btn"
              direction="left"
              disabled={fetching}
              onClick={loadPrevPokemons}
              enableKeyDown
              onKeyDown={loadPrevPokemons}
            />
          )}
          <PokemonList pokemons={pokemons} />
          {urls.nextUrl && (
            <ArrowButton
              className="pokemon-btn"
              direction="right"
              disabled={fetching}
              onClick={loadNextPokemons}
              enableKeyDown
              onKeyDown={loadNextPokemons}
            />
          )}
        </>
      )}
    </div>
  )
}
