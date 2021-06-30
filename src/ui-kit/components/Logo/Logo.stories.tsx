import React from 'react'
import {Logo }from './index'
import { UserContext } from '../../../store/user/UserContext'
import { Story } from '@storybook/react'

export default {
  title: 'Logo',
  decorators: [
    (StoryFn: Story) => {
      return (
        <UserContext.Provider
          value={{
            state: {
              id: null,
              firstName: 'Jude',
              lastName: 'Ezekiel',
              email: 'jude@strv.com',
              isLogged: true
            },
            dispatch: () => {}
          }}
        >
          <StoryFn />
        </UserContext.Provider>
      )
    },
  ],
}

export const Black = () => <Logo />
