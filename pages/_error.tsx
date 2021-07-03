import React from 'react'
import { NotFound } from '../src/pages/NotFound/NotFound'

function Error({ statusCode }) {
    return (
      <p>
        {statusCode
          ? (<NotFound/>)
          : (<NotFound />)}
      </p>
    )
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default Error