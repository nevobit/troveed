import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        size: {
            options: ['micro', 'slim', 'medium', 'large'],
            control: { type: 'select' }
        }
    }
}

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: "Default Button",
        size: 'medium',
        variant: 'primary'
    }
}