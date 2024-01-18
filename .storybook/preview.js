/** @type { import('@storybook/react').Preview } */
import { themes } from '@storybook/theming';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: 'DOS',
      values: [
        {
          name: 'DOS',
          value: '#eaeaea',
        },
        {
          name: 'Sky',
          value: '#ebf5fc',
        },
      ],
    },
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

// Create express server listening on port 3000 and connects to shopify storefront API

