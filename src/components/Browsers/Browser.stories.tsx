import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Browsers } from "./Browser";

export default {
  title: 'Browser',
  component: Browsers,
  argTypes: {

  }
} as ComponentMeta<typeof Browsers>

const Template: ComponentStory<typeof Browsers> = (args) => <Browsers {...args} />;

export const Browser = Template.bind({});

export const Browser2 = Template.bind({});
