/** @type { import('@storybook/react').Preview } */
import { themes } from '@storybook/theming';

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    parameters: {
      docs: {
        theme: themes.dark,
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
