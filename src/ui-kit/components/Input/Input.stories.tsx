import React from 'react'
import {Input} from './Input'

export default {
  title: 'Input',
  component: Input,
}

export const WithPlaceholder = () => <Input placeholder="Email" />
export const WithValue = () => <Input value="jude.ezekiel@strv.com" />
export const Password = () => (
  <Input type="password" value="jude.ezekiel@strv.com" />
)
export const ErrorMsg = () => (
  <Input
    value="jude.ezekiel@strv.com"
    hasError={true}
    errorMsg="Testing if you are real is hard"
  />
)
export const Date = () => <Input type="date" />
