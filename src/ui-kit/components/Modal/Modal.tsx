import React, {  FC, useEffect } from 'react'
import {Logo} from '../Logo'
import { Wrapper, Header, Content, Button, Icon, Text } from './styled'

type Props = {
  onClose: Function
}

/**
 * Modal 
 * Overlays on the view below and doesn't scroll
 */
export const Modal: FC<Props> = ({ children, onClose }) => {
  /** remove scrolling when open */
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])


  return (
    <Wrapper>
      <Header>
        <Logo />
        <Button onClick={() => onClose()}>
          <Icon src="/icons/close.svg" alt="closer" />
          <Text>close</Text>
        </Button>
      </Header>
      <Content>{children}</Content>
    </Wrapper>
  )
}

Modal.displayName = 'Modal'
