import { ComponentStory, ComponentMeta } from "@storybook/react";
import KeoInputBase from "../KeoInputBase";

// interface IProduct {
//   name: string;
//   price: number;
// }

export default {
  title: 'Keo/Input Base',
  component: KeoInputBase,
  args: {
    type: 'text',
    label: 'Name'
  }
} as ComponentMeta<typeof KeoInputBase>

const Template: ComponentStory<typeof KeoInputBase> = (args) => <KeoInputBase {...args} />

export const Default = Template.bind({})