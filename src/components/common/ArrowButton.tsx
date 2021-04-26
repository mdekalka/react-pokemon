import { useEffect, memo } from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

import { noop } from '../../utils/function';

import './ArrowButton.scss';


interface ArrowButtonProps {
  direction: 'left' | 'right' | 'up' | 'down'
  disabled?: boolean
  onClick: () => void
  className?: string
  enableKeyDown?: boolean
  onKeyDown?: () => void
}

const DIRECTION_KEYS = {
  left: 'ArrowLeft',
  right: 'ArrowRight',
  down: 'ArrowDown',
  up: 'ArrowUp'
}

const DIRECTION_ICONS = {
  left: faArrowAltCircleLeft,
  right: faArrowAltCircleRight,
  down: faArrowAltCircleDown,
  up: faArrowAltCircleUp
}

export const ArrowButton = memo(({ direction, disabled, onClick, className = '', enableKeyDown = false, onKeyDown = noop }: ArrowButtonProps) => {
  const icon = DIRECTION_ICONS[direction];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (disabled) return;

      const isValidEvent = event.code === DIRECTION_KEYS[direction];

      if (isValidEvent) {
        onKeyDown();
      }
    }

    if (enableKeyDown) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return function() {
      if (enableKeyDown) {
        window.removeEventListener('keydown', handleKeyDown);
      }
    }
  }, []);

  return (
    <button className={cx(className, {[direction]: true })} disabled={disabled} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </button>
  )
})
