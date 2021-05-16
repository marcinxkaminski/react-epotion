import React from 'react';
import ReactDOM from 'react-dom';

import Epotion from './Epotion';

ReactDOM.render(
  <React.StrictMode>
    <Epotion
      customReporter={({ image, ...data }) => {
        // eslint-disable-next-line eslint-comments/no-unlimited-disable,no-unsanitized/property,xss/no-mixed-html
        document.querySelector('#result').innerHTML = JSON.stringify(data, undefined, 4);
        // eslint-disable-next-line eslint-comments/no-unlimited-disable,no-unsanitized/property,xss/no-mixed-html
        document.querySelector('#photo-container').innerHTML = '';
        // eslint-disable-next-line eslint-comments/no-unlimited-disable,no-unsanitized/property,xss/no-mixed-html,unicorn/prefer-dom-node-append
        document.querySelector('#photo-container').appendChild(image);
      }}
    />
  </React.StrictMode>,
  document.querySelector('#root'),
);
