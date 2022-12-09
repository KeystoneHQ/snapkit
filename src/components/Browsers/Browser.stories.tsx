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
  },
  args: {
    list: ['edge', 'brave', 'opera', 'firefox'],
    className: 'asdf'
  }
} as ComponentMeta<typeof Browsers>

const Template: ComponentStory<typeof Browsers> = (args) => {
  const { open, list, className } = args
  const [isOpen, setIsOpen] = useState<boolean>(open);

  return(
    <Browsers open={isOpen} list={list} className={className} close={() => setIsOpen(false)} />
  )
};

export const Browser = Template.bind({});
