import React from 'react'
import { Spinner } from './styled'

/**
 * Loader component
 * image designed with transitions
 * @function
 */
export const Loader = () => {
  return <Spinner src="/icons/spinner.svg" alt='spinner'/>
}

Loader.displayName = 'Loader'
