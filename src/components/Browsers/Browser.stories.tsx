import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Browsers } from "./Browser";

export default {
  title: 'Browser',
  component: Browsers,
  argTypes: {
    open: {
      description: '是否显示弹窗',
      defaultValue: true,
    }
  }
} as ComponentMeta<typeof Browsers>

const Template: ComponentStory<typeof Browsers> = (args) => {
  const [isOpen, setIsOpen] = useState<boolean>(args.open);

  return(
    <Browsers open={isOpen} close={() => setIsOpen(false)} />
  )
};

export const Browser = Template.bind({});
