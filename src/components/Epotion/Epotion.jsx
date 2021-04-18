import { css } from '@emotion/css';
import { EVENTS, init, on, startTracking, stopTracking } from 'epotion';
import { bool, func, string } from 'prop-types';
import { useEffect, useState } from 'react';

import * as styles from './Epotion.styles';
import { getEmotionEmoji, getEpotionIcon } from './helpers';

const Epotion = ({
  minimized,
  text,
  readMoreText,
  readMoreUrl,
  startTrackingText,
  stopTrackingText,
  customReporter,
  enableReporting,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(minimized);
  const [isTracking, setIsTracking] = useState();
  const [currentEmotion, setCurrentEmotion] = useState();

  useEffect(() => {
    const initEpotion = async () => {
      await init();
    };
    initEpotion();
    on(EVENTS.TRACKED, ({ emotion }) => setCurrentEmotion(emotion));
  }, []);

  const toggleTracking = ({ target: { checked: shouldTrack } }) => {
    if (shouldTrack) {
      startTracking(customReporter, enableReporting);
    } else {
      stopTracking();
    }

    setIsTracking(shouldTrack);
  };

  if (!isOpen) return null;

  if (isMinimized) {
    return (
      <button
        className={css(styles.root, styles.button, styles.minimized)}
        onClick={() => setIsMinimized(false)}
      >
        {!isTracking && getEpotionIcon()}
        {isTracking && getEmotionEmoji(currentEmotion)}
      </button>
    );
  }

  return (
    <div className={css(styles.root, styles.container)}>
      <div className={styles.buttonContainer}>
        <button
          className={css(styles.button, styles.verticalAlignTop)}
          onClick={() => setIsMinimized(true)}
        >
          _
        </button>
        <button className={styles.button} onClick={() => setIsOpen(false)}>
          x
        </button>
      </div>

      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Epotion</h1>
        {getEpotionIcon()}
      </div>

      {!isTracking && (
        <p className={styles.content}>
          {`${text} `}
          <a className={styles.readMore} target="__blank" href={readMoreUrl}>
            {readMoreText}
          </a>
        </p>
      )}

      {isTracking && (
        <div className={css(styles.content, styles.textCenter, styles.currentEmotionEmoji)}>
          {getEmotionEmoji(currentEmotion)}
        </div>
      )}

      <label
        className={css(styles.button, styles.toggleSwitch, isTracking && styles.toggleSwitchActive)}
      >
        <input type="checkbox" onChange={toggleTracking} checked={isTracking} />
        <span>{isTracking ? stopTrackingText : startTrackingText}</span>
      </label>
    </div>
  );
};

Epotion.defaultProps = {
  minimized: false,
  text:
    'Allow us to track your emotions while you browse the page so we could provide you with better user experience. Data is collected anonymously.',
  readMoreText: 'Click here to read more.',
  readMoreUrl: 'https://marcinxkaminski.github.io/epotion-api/epotion.html',
  startTrackingText: '🚀 start tracking',
  stopTrackingText: '✋🏻 stop tracking',
  enableReporting: true,
};

Epotion.propTypes = {
  minimized: bool,
  text: string,
  readMoreText: string,
  readMoreUrl: string,
  startTrackingText: string,
  stopTrackingText: string,
  customReporter: func,
  enableReporting: bool,
};

export default Epotion;
