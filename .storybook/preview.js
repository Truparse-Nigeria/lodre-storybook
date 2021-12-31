import React from 'react';
// import { GlobalStyles } from '../src/config/global.styles';
import '../src/config/fonts/styles.css'
import '../src/config/styles/main.scss'

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <>
      {/* <GlobalStyles /> */}
      <Story />
    </>
  ),
];
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
