import { create } from '@storybook/theming/create';
import logo from '../src/assets/logo.webp'


export default create({
  base: 'dark',
  brandTitle: 'Shadow-UI, a neumorphic open-sourced design system',
  brandUrl: 'https://shadow-ui.com',
  brandImage: logo,
  brandTarget: '_self',
});