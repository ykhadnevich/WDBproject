import { fn } from '@storybook/test'
import { Tab } from '../Components/TabContainer'

export default {
  title: 'Tabs/Tab',
  component: Tab,
  tags: ['autodocs'],
  args: { onClick: fn() }
}

export const Component = {}
