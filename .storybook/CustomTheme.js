import { create } from '@storybook/theming/create';

export default create({
//   base: 'light',
//   // Typography
  fontBase: 'ui-sans-serif, system-ui, sans-serif, "SF Pro", "Inter", "Hiragino Sans", "Noto Sans JP", "BIZ UDPGothic"',
//   fontBase: '"Open Sans", sans-serif',
//   fontCode: 'monospace',

  brandTitle: 'SampleStorybook',
//   brandUrl: 'https://example.com',
//   brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
//   brandTarget: '_self',

  //
  colorPrimary: '#156775',
  colorSecondary: '#075e85',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
//   appBorderColor: '#156775',
  appBorderRadius: 4,

  // Text colors
  textColor: '#10162F',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#23272e',
  barSelectedColor: '#075e85',
  barHoverColor: '#0c506e',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
//   inputBorder: '#083549',
  inputTextColor: '#083549',
  inputBorderRadius: 2,
});