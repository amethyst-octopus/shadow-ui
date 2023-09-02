import { SButton } from "./SButton"

export default {
    component: SButton,
    title: 'Components/SButton'
}

export const Primary = {
    args: {
        text: 'Label',
        kind: 'primary'
    }
}

export const Secondary = {
    args: {
        text: 'Label',
        kind: 'secondary'
    }
}