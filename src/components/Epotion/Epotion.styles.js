import { css } from '@emotion/css';

export const textCenter = css`
  text-align: center;
`;

export const verticalAlignTop = css`
  vertical-align: 'top';
`;

export const button = css`
  border: none;
  color: #fff;
  outline: none;
  background: #121212;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const root = css`
  position: absolute;
  z-index: ${Number.MAX_SAFE_INTEGER};
  right: 50px;
  bottom: 50px;
  color: #fff;
  text-align: center;
  background: #121212;
  font-family: 'Arial';
  -webkit-box-shadow: 0px 15px 35px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 15px 35px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 15px 35px 0px rgba(0, 0, 0, 0.4);
`;

export const minimized = css`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 25px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: none;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
`;

export const container = css`
  width: 250px;
  height: 250px;
  padding: 15px;
  border-radius: 20px;
`;

export const buttonContainer = css`
  text-align: right;
  padding: 0;
  button {
    padding: 0 0.5em;
  }
`;

export const toggleSwitch = css`
  width: 160px;
  height: 35px;
  display: inline-block;
  font-size: 1em;
  border-radius: 20px;
  background: #03dac6;
  margin: 10px 0;
  line-height: 2.15;
  transition: all 0.3s ease-in-out;
  input {
    display: none;
  }
`;

export const toggleSwitchActive = css`
  background: #b00020;
`;

export const titleWrapper = css`
  margin: 20px 0;
`;

export const title = css`
  text-transform: uppercase;
  letter-spacing: 0.4em;
  font-size: 1.3em;
  vertical-align: bottom;
  height: 25px;
  display: inline;
`;

export const content = css`
  font-size: 0.9em;
  margin: 20px 0;
  height: 80px;
  text-align: justify;
`;

export const readMore = css`
  color: #03dac6;
  &:hover {
    opacity: 0.8;
  }
`;

export const currentEmotionEmoji = css`
  font-size: 65px;
`;
