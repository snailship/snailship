import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '../IconButton'

const meta: ComponentMeta<typeof Button> = {
  title: 'Components/Buttons/Icon buttons',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
}

const Template: ComponentStory<typeof Button> = (args) => (
  <div style={{ display: 'flex', gap: 15, margin: '12px 0' }}>
    <Button {...args} icon="settings" />
    <Button {...args} icon="settings" disabled />
  </div>
)

export const Standard = Template.bind({})
Standard.args = {
  variant: 'standard',
}

export const Filled = Template.bind({})
Filled.args = {
  variant: 'filled',
}

export const Tonal = Template.bind({})
Tonal.args = {
  variant: 'tonal',
}

export const Outlined = Template.bind({})
Outlined.args = {
  variant: 'outlined',
}

export default meta
