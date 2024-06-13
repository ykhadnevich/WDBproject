import { fn } from '@storybook/test'
import { Map } from '../Components/Map'

export default {
  title: 'Example/Map',
  component: Map,
  tags: ['autodocs'],
  args: { onClick: fn() }
}

export const Component = {}
