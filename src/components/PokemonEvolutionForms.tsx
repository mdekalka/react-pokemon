import cx from 'classnames';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

import { Evolution } from '../slices/evolutionSlice';
import { selectPokemonByName } from '../slices/pokemonsSlice';
import { RootState } from '../store/store';
import { getOfficialImage } from '../utils/pokemon';
import pikachuImage from '../icons/pickachu2.png';

import './PokemonEvolutionForms.scss'


interface PokemonEvolutionChainProps {
  evolution: Evolution
  finished: boolean
}

export const PokemonEvolutionForms = ({ evolution, finished }: PokemonEvolutionChainProps) => {;
  // TODO: This does not feels good from logical standpoint, seems if we need to get partial selector we need to create
  // a separate component inside <map> and use <useSelector> inside.
  const state = useSelector((state: RootState) => state);
  const previousForm = selectPokemonByName(state, evolution?.previousForm);
  const nextForm = selectPokemonByName(state, evolution?.nextForm);
  const previousFormImage = getOfficialImage(previousForm);
  const nextFormImage = getOfficialImage(nextForm);

  if (!finished) return null;

  if (!previousForm && !nextForm && finished) {
    return (
      <div className="no-evolution">
        <p>No evolution form found.</p>
        <img src={pikachuImage} alt="no evolution form" />
      </div>
  )}

  return (
    <div className={cx('evolution-chain', { right: !!nextForm && !previousForm })}>
      {previousForm ? (
        <div className="evolution-form previous-form">
          <p className="evolution-name align-left">{previousForm?.name}</p>
          <div className="evolution-image-wrapper">
            <img className="evolution-image" src={previousFormImage} alt={previousForm.name} />
            <FontAwesomeIcon className="evolution-arrow previous" icon={faAngleDoubleRight} />
            <FontAwesomeIcon className="evolution-arrow previous" icon={faAngleDoubleRight} />
          </div>
        </div>
      ) : <div />}

      <div className="current-form">
        <FontAwesomeIcon className="evolution-arrow current" icon={faAngleDoubleUp} />
        <FontAwesomeIcon className="evolution-arrow current" icon={faAngleDoubleUp} />
        <FontAwesomeIcon className="evolution-arrow current" icon={faAngleDoubleUp} />
      </div>

      {nextForm ? (
        <div className="evolution-form next-form">
          <p className="evolution-name align-right">{nextForm?.name}</p>
          <div className="evolution-image-wrapper">
            <FontAwesomeIcon className="evolution-arrow next" icon={faAngleDoubleRight} />
            <FontAwesomeIcon className="evolution-arrow next" icon={faAngleDoubleRight} />
            <img className="evolution-image" src={nextFormImage} alt={nextForm.name} />
          </div>
        </div>
      ) : <div />}
    </div>
  )
}

