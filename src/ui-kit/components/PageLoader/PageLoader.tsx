import React from 'react'
import { Loader } from '../Loader/Loader'
import { Wrapper } from './styled'

/**
 * Loader wrapper
 * Wrap loader to take up the whole viewport height
 * @function
 */
export const PageLoader = () => {
  return (
    <Wrapper>
      <Loader />
    </Wrapper>
  )
}

PageLoader.displayName = 'PageLoader'
