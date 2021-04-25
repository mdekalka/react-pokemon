import cx from 'classnames';

import './PokeBall.scss';


interface PokeBallProps {
  fetching?: boolean
  finished?: boolean
  onClick: () => void
}

export const PokeBall = ({ fetching, finished, onClick }: PokeBallProps) => {
  return (
    <div className={cx('pokeball', { fetching, finished })} onClick={onClick}>
      <div className="pokeball-up"></div>
      <div className="pokeball-down"></div>
    </div>
  )
}
