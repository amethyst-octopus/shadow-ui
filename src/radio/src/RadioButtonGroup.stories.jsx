import { T1RadioButtonGroup } from "./RadioButtonGroup";

export default {
  title: 'Components/RadioButtons',
  component: T1RadioButtonGroup
}

export const Type_One = {
  args: {
    name: "test",
    options: [
      { id: "opt1", label: "Option 1", value: "opt1" },
      { id: "opt2", label: "Option 2", value: "opt2" },
      { id: "opt3", label: "Option 3", value: "opt3" },
    ],
  }
}
