import React from 'react'
import Tabs from './Tabs'

export default function App() {
  return (
    <div>
      <Tabs defdefaultValue='tab1'>
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">Tab 1 content</Tabs.Content>
        <Tabs.Content value="tab2">Tab 2 content</Tabs.Content>
        <Tabs.Content value="tab3">Tab 3 content</Tabs.Content>
      </Tabs>
    </div>
  )
}
