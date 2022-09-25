import { ComponentStory, ComponentMeta } from '@storybook/react'
import Card from '../index'

const meta: ComponentMeta<typeof Card> = {
  title: 'Components/Cards',
  component: Card,
}

const Template: ComponentStory<typeof Card> = (args) => (
  <>
    <div style={{ display: 'flex', gap: 27, margin: '12px 0' }}>
      <Card>
        <Card.Headline title='Title' subhead='subhead' />
      </Card>
    </div>
    <div style={{ display: 'flex', gap: 15, margin: '12px 0' }}>
    </div>
  </>
)

export const Elevated = Template.bind({})
Elevated.args = {
  variant: 'elevated',
}

export default meta