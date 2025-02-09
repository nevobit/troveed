import { Meta, StoryObj } from "@storybook/react";
import Input from ".";

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    argTypes: {
    }
}

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        children: "Default Button",
    }
}