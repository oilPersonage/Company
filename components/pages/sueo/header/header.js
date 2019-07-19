import React from 'react'
import {Title, ExtraTitle, ContainerHead} from './style'
import Components from './components'

const Header = ({index, l}) => {
  const {title, name, extraTitle, componentsList, componentsTitle} = l.sueo.header
  return <ContainerHead index={index}>

    <svg width="0" height="0" fill="none" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="clipPathSueoHeader">
        <path className="st0"
              d="M978,909.9c-334.4,3.2-791.3-86.3-978-131.5V0h1920v778.6C1743.7,821.1,1312.4,906.7,978,909.9z"/>
      </clipPath>
    </svg>

    <Title>{title}<span>{name}</span></Title>

    <ExtraTitle>
      {extraTitle}
    </ExtraTitle>
    <Components l={{componentsList, componentsTitle}}/>
  </ContainerHead>
}

export default Header
