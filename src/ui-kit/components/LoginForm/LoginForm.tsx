import React, { useState, useContext } from 'react'
import Router from 'next/router'
import { useForm } from 'react-hook-form'

import { Input } from '../Input'
import { Text, Link } from '../Typography'
import { UserContext } from '../../../store/user/UserContext'
import { COLOR, SIZES, ACTIONS } from '../../../enums/constants'
import { loginUser } from '../../../apiFactory/userApi'

import { ROUTES } from '../../../enums/routes'
import { FormStyle, StyledButton, ErrorMsg, SignUp } from './styled'

type FormData = {
  email: string
  password: string
}

export const LoginForm = () => {
  const [loginError, setLoginError] = useState(false)
  const [passwordShown, setPasswordShown] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const [loading, setLoading] = useState(false)

  const { dispatch } = useContext(UserContext)

  /** Login a User */
  const onSubmit = async (data: FormData) => {
    try {
      setLoginError(false)
      setLoading(true)

      const response = await loginUser(data)
      if (response) {
        dispatch({ type: ACTIONS.LOGIN, user: response })
        void Router.push(ROUTES.EVENTS)
      }
    } catch (error) {
      setLoginError(true)
      setLoading(false)
    }
  }
  const handleToggle = () => {
    setPasswordShown(!passwordShown)
}
  return (
    <>
      {loginError && (
        <ErrorMsg>
          Oops. That email and password combination is not valid.
        </ErrorMsg>
      )}

      <FormStyle onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          id="email"
          placeholder="Email"
          autocomplete="email"
          hasError={!!errors.email}
          {...register('email',{ required: true })}
          errorMsg="Email is required"
        />

        <Input
          type={passwordShown ? "text" : "password"}
          id="password"
          onToggle={handleToggle}
          placeholder="Password"
          {...register('password', { required: true })}
          autocomplete="current-password"
          hasError={!!errors.password}
          errorMsg="Password is required"
        />

        <SignUp>
          <Text>Don’t have account?</Text>
          <Link href="#register"> SIGN UP</Link>
        </SignUp>

        <StyledButton
          isLoading={loading}
          type="submit"
          size={SIZES.BIG}
          color={COLOR.PRIMARY}
        >
          Sign in
        </StyledButton>
      </FormStyle>
    </>
  )
}

LoginForm.displayName = 'LoginForm'
