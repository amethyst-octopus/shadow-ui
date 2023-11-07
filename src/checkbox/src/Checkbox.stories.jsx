import { T1Checkbox } from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: T1Checkbox,
  argTypes: {
    initialState: {
      control: 'boolean'
    }
  }
};

export const Type_One = {
  args: {
    label: 'Checkbox label',
    initialState: false
  },
};
