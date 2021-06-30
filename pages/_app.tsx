import React, { Suspense } from 'react'
import PageLoginManager from '../src/ui-kit/components/PageLoginManager'
import { UserProvider } from '../src/store/user/UserContext'
import {PageLoader} from '../src/ui-kit/components/PageLoader/PageLoader'
import App from 'next/app'
import '../src/global.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <UserProvider>
        <PageLoginManager>
          <Suspense fallback={<PageLoader />}>
            <Component {...pageProps} />
          </Suspense>
        </PageLoginManager>
      </UserProvider>
    )
  }
}

export default MyApp