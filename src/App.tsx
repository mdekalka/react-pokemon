import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { PokemonApp } from './components/PokemonApp';

function App() {
  return (
    <Switch>
      <Route path="/:pageNumber">
        <PokemonApp />
      </Route>
      {/* If no page numebr exists - redirect to the first one */}
      <Redirect to="/1" />
    </Switch>
  );
}

export default App;
