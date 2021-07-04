import styled from 'styled-components'
import { theme } from '../../assets/theme'
import { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type?: string
  hasError?: boolean
}

export const CustomInput = styled.input.attrs((props: Props) => ({
  type: props.type,
}))`
  border: none;
  border-bottom: 1px solid
    ${(props: Props) =>
      props.hasError ? theme.color.violetRed : theme.color.lightest};
  width: 100%;
  color: ${theme.color.dark};
  padding: 0.5rem 0;
  margin-bottom: 0.5rem;
  font-size: ${theme.fontSize.normal};
  outline: none;

  &::placeholder {
    color: ${theme.color.normal};
  }
`
export const Label = styled.span`
  display: block;
  text-align: left;
  margin-bottom: 0.5rem;
  &.disabled {
    opacity: 0.3;
  }
`
export const ErrorMsg = styled.span`
  display: block;
  text-align: left;
  color: ${theme.color.violetRed};
`
