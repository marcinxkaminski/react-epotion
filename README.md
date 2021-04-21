# react-epotion 🧪

![Continous Integration ♾](https://github.com/marcinxkaminski/react-epotion/workflows/Continous%20Integration%20%E2%99%BE/badge.svg)
[![npm version](https://badge.fury.io/js/react-epotion.svg)](https://badge.fury.io/js/react-epotion)

Simple component for managing [Epotion](https://github.com/marcinxkaminski/epotion) tracking.

## Views 🌁

| Disabled View     | Disabled Minimized View       | Enabled View      | Enabled Minimized View    |
| :-----------:     | :---------------------:       | :-----------:     | :--------------------:    |
|  ![](https://github.com/marcinxkaminski/react-epotion/blob/master/docs/disabled.png?raw=true)    | ![](https://github.com/marcinxkaminski/react-epotion/blob/master/docs/disabled-minimized.png?raw=true)   | ![](https://github.com/marcinxkaminski/react-epotion/blob/master/docs/enabled.png?raw=true)    | ![](https://github.com/marcinxkaminski/react-epotion/blob/master/docs/enabled-minimized.png?raw=true) |

## Install 🔧

use NPM:

```
npm i -S react-epotion
```

use Yarn:

```
yarn add react-epotion
```

## Example 🤓

```js
import Epotion from 'react-epotion';

const YourComponent = () => <Epotion />;

export default YourComponent;

```

## Options ⚙️

| Name     | Description |  Default    | Type  | Required      |
| :--:     | :---------: |  :-----:    | :--:  | :------:      |
| minimized| Specifies if the window for Epotion is minimized. User has possibility to maximize it. |  `false`    | bool  | ❌            |
| text| Text that's displayed when tracking is disabled. |  `'Allow us to track your emotions while you browse the page so we could provide you with better user experience. Data is collected anonymously.'`    | string  | ❌            |
| readMoreText| Text for __Read More__ button. |  `'Click here to read more.'`    | string  | ❌            |
| readMoreUrl| Url for __Read More__ button. |  `'https://marcinxkaminski.github.io/epotion-api/epotion.html'`    | string  | ❌            |
| startTrackingText| Text for __Start Tracking Button__. |  `'🚀 start tracking'`    | string  | ❌            |
| stopTrackingText| Text for __Stop Tracking Button__. |  `'✋🏻 stop tracking'`    | string  | ❌            |
| customReporter| Specifies the reporter that will be used for reporting data. If you set your own reporter, default (Epotion's) reporter will be skipped. For more info check [Epotion docs here](https://github.com/marcinxkaminski/epotion). |  `undefined`    | function  | ❌            |
| enableReporting| Specifies if the reporting feature should be enabled. |  `true`    | bool  | ❌            |

## Future Work 🔮

- [ ] Test the component
- [ ] Add more views, e.g. statistics view, to display averages of already gathered data or page statistics view

## Development 👷🏼‍♂️

```
git clone https://github.com/marcinxkaminski/react-epotion.git
cd react-epotion
npm ci
npm run start
```

## Contribution

Feel free to contribute - every help is welcome 🙏🏻
