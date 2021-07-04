import React from 'react'
import { NotFound } from '../src/pages/NotFound/NotFound'
import { NextApiResponse } from 'next'

interface ErrorType {
  name: string
  message: string
  stack?: string
}

type responseAndError = {
  res: NextApiResponse
  err:
    | (ErrorType & {
        statusCode?: number
      })
    | null
}
const Error = ({ statusCode }: { statusCode: number }) => {
  return <div>{statusCode ? <NotFound /> : <NotFound />}</div>
}

Error.getInitialProps = ({ res, err }: responseAndError) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
