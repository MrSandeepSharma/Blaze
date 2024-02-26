import React from 'react'
import { Link } from 'react-router-dom'

function LinkButton({text, className="", ...rest}) {
  return (
    <Link className={`link-btn ${className}`} {...rest}>{text}</Link>
  )
}

export default LinkButton

