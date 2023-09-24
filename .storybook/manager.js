// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import shadowTheme from './shadowTheme';

addons.setConfig({
  theme: shadowTheme,
});