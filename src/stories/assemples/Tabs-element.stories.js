import React from 'react'
import { fn } from '@storybook/test'

import { Tab, TabContainer } from '../../Components/TabContainer'
import { Map } from '../../Components/Map'

const LayoutExample = () => {
  return (
    <TabContainer
      tabNames={['Мапа', 'Список']}
      renderTab={(key, onChange, isActive) => (
        <Tab isActive={isActive} tabKey={key} onTab={onChange} />
      )}
      renderBody={(activeTab) => {
        return <>{getTabContent(activeTab)}</>
      }}
    />
  )
}

function getTabContent(activeTab) {
  switch (activeTab) {
    case 'Мапа':
      return <Map />

    default:
      return <div>Some content</div>
  }
}

export default {
  title: 'Assemble/Tabs',
  component: LayoutExample,
  args: { onClick: fn() }
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const HeaderComponent = {}
