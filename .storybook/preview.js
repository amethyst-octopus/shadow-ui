/** @type { import('@storybook/react').Preview } */
import { themes } from '@storybook/theming';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import prettier from 'prettier/standalone';
import prettierBabel from 'prettier/parser-babel';
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
        transformSource: input =>
          prettier.format(input, {
            parser: 'babel',
            plugins: [prettierBabel],
          }),
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