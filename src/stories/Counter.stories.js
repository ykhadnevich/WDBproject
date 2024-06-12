import { fn } from '@storybook/test'
import { Counter } from '../Components/Counter/counter'

export default {
  title: 'Example/Counter',
  component: Counter,
  tags: ['autodocs'],
  args: { onClick: fn() }
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const HeaderComponent = {
  args: {
    value: 1
  }
}
