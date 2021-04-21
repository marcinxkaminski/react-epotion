import React from 'react';
import ReactDOM from 'react-dom';

import Epotion from './Epotion';

ReactDOM.render(
  <React.StrictMode>
    <Epotion
      customReporter={(data) => {
        const video = document.querySelector('video');
        // eslint-disable-next-line  eslint-comments/no-unlimited-disable,no-unsanitized/property,xss/no-mixed-html
        document.querySelector('#result').innerHTML = JSON.stringify(
          {
            ...data,
            videoTime: video.currentTime,
            videoPlaybackRate: video.playbackRate,
            videoVolume: video.volume,
          },
          undefined,
          4,
        );
      }}
    />
  </React.StrictMode>,
  document.querySelector('#root'),
);
