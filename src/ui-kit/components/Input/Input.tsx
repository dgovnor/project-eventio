/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import React, { FC, InputHTMLAttributes } from 'react'
import { CustomInput, ErrorMsg, Label } from './styled'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
  errorMsg?: string
  label?: string
  autocomplete?: string
}

/**
 * Input component with error message
 */
export const Input: FC<Props> = ({ hasError, errorMsg, label, ...rest }) => {
  return (
    <label>
      <Label>{label}</Label>
      <CustomInput hasError={hasError} {...rest} />
      {hasError && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </label>
  )
}

Input.displayName = 'Input'
