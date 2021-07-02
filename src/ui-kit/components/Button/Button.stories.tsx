import React from 'react'
import {Button, ButtonLink, IconButton} from './index'
import {RoundButton} from './RoundButton'
import { COLOR, SIZES } from '../../../enums/constants'

export default {
  title: 'Button',
  component: ButtonLink,
}

export const Link = () => <ButtonLink>Link button</ButtonLink>
export const Round = () => <RoundButton icon="/icon/plus.svg"></RoundButton>
export const Icon = () => (
  <IconButton iconUrl="/icon/icon-list.svg"></IconButton>
)

export const Primary = () => {
  return (
    <>
      <Button 
        size={SIZES.SMALL}
        color={COLOR.PRIMARY}>Sign in
      </Button>
      <Button
        color={COLOR.PRIMARY}
        size={SIZES.SMALL}
      >
        Join
      </Button>
      <Button
        color={COLOR.PRIMARY}
        size={SIZES.SMALL}
        disabled
      >
        Join
      </Button>
    </>
  )
}

export const Secondary = () => {
  return (
    <>
      <Button 
        size={SIZES.SMALL}
        color={COLOR.SECONDARY}>Sign in</Button>
      <Button
        color={COLOR.SECONDARY}
        size={SIZES.SMALL}
      >
        Leave
      </Button>
      <Button
        color={COLOR.SECONDARY}
        size={SIZES.SMALL}
        disabled
      >
        Leave
      </Button>
    </>
  )
}

export const Third = () => (
  <Button size={SIZES.SMALL} color={COLOR.THIRD}>Leave event</Button>
)
export const Basic = () => (
  <Button size={SIZES.SMALL} color={COLOR.NORMAL}>Edit event</Button>
)
