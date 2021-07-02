import React, { Suspense } from 'react'
import {AppGuard} from '../src/ui-kit/components/AppGuard'
import { UserProvider } from '../src/store/user/UserContext'
import {PageLoader} from '../src/ui-kit/components/PageLoader/PageLoader'
import App from 'next/app'
import '../src/global.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <UserProvider>
        <AppGuard>
          <Suspense fallback={<PageLoader />}>
            <Component {...pageProps} />
          </Suspense>
        </AppGuard>
      </UserProvider>
    )
  }
}

export default MyApp