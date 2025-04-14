import { fn } from '@storybook/test';

import MyButton from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Sample/Button',
  component: MyButton,
  tags: ['autodocs'],
  argTypes: {
    tone: { control: { type: 'select' }, options: ['primary', 'secondary', 'tertiary'] },
    size: { control: { type: 'select' }, options: ['small', 'medium', 'large'] },
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    tone:"tertiary",
    label: 'ボタン',
  },
};

export const Secondary = {
  args: {
    tone:'secondary',
    label: 'ボタン',
  },
};

export const Tertiary = {
  args: {
    tone:'tertiary',
    label: 'ボタン',
  },
};

// export const Large = {
//   args: {
//     size: 'large',
//     label: 'ボタン',
//   },
// };

// export const Small = {
//   args: {
//     size: 'small',
//     label: 'ボタン',
//   },
// };
