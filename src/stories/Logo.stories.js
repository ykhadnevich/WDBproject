import React from 'react'
import { fn } from '@storybook/test'
import { Logo } from '../Components/Logo/logo'

const LayoutExample = () => {
  return <Logo />
}

export default {
  title: 'Example/Logo',
  component: LayoutExample,
  tags: ['autodocs'],
  args: { onClick: fn() }
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Component = {
  args: {
    label: 'Logo'
  }
}
