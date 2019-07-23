import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
  height: 100vh;
  min-width: 100vw;
  margin-top: -50px;
`

const HeaderBox = ({children}) => {
  return <Header>{children}</Header>
}

export default HeaderBox
