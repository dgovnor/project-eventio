/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import React, { forwardRef, InputHTMLAttributes } from 'react'
import { CustomInput, StyledInput, ErrorMsg, Label } from './styled'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
  errorMsg?: string
  label?: string
  fRef?: any
  onToggle?: () => void
  autocomplete?: string
}

/**
 * Input component with error message
 */
export const Input = forwardRef<HTMLInputElement, Props>(
  ({ hasError, onToggle, errorMsg, label, fRef, ...rest }) => {
    const togglePasswordVisibility = (e: any) => {
      e.preventDefault()
      if (onToggle) {
        onToggle()
      }
    }

    return (
      <label>
        <Label>{label}</Label>
        <StyledInput className="inputWithIcon">
          <CustomInput hasError={hasError} ref={fRef} {...rest} />
          {rest.name === 'password' && (
            <button className="right-icon" onClick={togglePasswordVisibility}>
              <img src="/icons/show-icon.svg" alt="icon" />
            </button>
          )}
        </StyledInput>
        {hasError && <ErrorMsg>{errorMsg}</ErrorMsg>}
      </label>
    )
  }
)

Input.displayName = 'Input'
