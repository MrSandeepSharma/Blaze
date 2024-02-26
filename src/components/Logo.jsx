import React from 'react'

import logoImg from "../assets/logo.svg"

function Logo({width=149 , height=43 , ...rest}) {
  return (
    <img src={logoImg} alt="Blaze" width={width} height={height} {...rest} />
  )
}

export default Logo
