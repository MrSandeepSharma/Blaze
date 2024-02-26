import React from 'react'

import {LinkButton} from './Button'

function PageCTA() {
  return (
    <div className="pagecta">
        <h2>Start your free 7-day trial</h2>
        <p>$0 today, then $25/month.</p>
        <LinkButton className='btn btn-hover' text="get started for free" />
    </div>
  )
}

export default PageCTA
