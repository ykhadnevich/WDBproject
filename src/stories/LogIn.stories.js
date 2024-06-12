import { fn } from '@storybook/test'
import { LogIn } from '../Components/LogIn/login'

export default {
  title: 'Example/LogIn',
  component: LogIn,
  tags: ['autodocs'],
  args: { onClick: fn() }
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Component = {}
