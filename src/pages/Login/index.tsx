import React from 'react'
import Layout from '../../ui-kit/layouts/'
import { PublicRoute } from '../../routes/PublicRoute'
import { Subtitle, Title } from '../../ui-kit/components/Typography'
import { LoginForm } from '../../ui-kit/components/LoginForm/LoginForm'

const Login = () => {
  return (
    <PublicRoute>
      {() => (
        <Layout>
          <Title> Sign in to Eventio.</Title>
          <Subtitle> Enter your details below.</Subtitle>
          <LoginForm />
        </Layout>
      )}
    </PublicRoute>
  )
}

export default Login
