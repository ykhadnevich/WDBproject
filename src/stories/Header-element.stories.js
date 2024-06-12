import React from 'react'
import { fn } from '@storybook/test'
import { Header, HeaderLeft, HeaderRight } from '../Components/Header'
import { Logo } from '../Components/Logo/logo'
import { Counter } from '../Components/Counter/counter'
import { LogIn } from '../Components/LogIn/login'

const LayoutExample = () => {
  return (
    <Header>
      <HeaderLeft>
        <Logo />
        <Counter active={false} type="total" value={10} />
        <Counter active={false} type="done" value={3} />
      </HeaderLeft>
      <HeaderRight>
        <LogIn isLogged={false} />
      </HeaderRight>
    </Header>
  )
}

export default {
  title: 'Assemble/Header',
  component: LayoutExample,
  tags: ['autodocs'],
  args: { onClick: fn() }
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const HeaderComponent = {}
