import { fetchPokemonsInfo, resetPokemonsInfo } from '../slices/pokemonsSlice';

const POKEMON_INFO_INVALIDATION_TIME = 1000 * 60 * 60 // 60min

export const pokemonCacheMiddleware = store => next => action => {
	switch (action.type) {
		case `${fetchPokemonsInfo.typePrefix}/pending`:
      pokemonCacheInvalidator(store);
			break;
	}
	return next(action);
};


const pokemonCacheInvalidator = ({ dispatch, getState }) => {
  const { pokemons } = getState();
  const { responseDate } = pokemons;
  const now = Date.now();

  if (responseDate && (now - responseDate > POKEMON_INFO_INVALIDATION_TIME)) {
    dispatch(resetPokemonsInfo());
  }
}