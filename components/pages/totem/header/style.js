import styled from 'styled-components'
import c from '../../../../styled/color'

export const Title = styled.h1`
  text-transform: uppercase;
  padding-top: 100px;
  margin-bottom: 30px;
`

export const Header = styled.div`
  height: calc(100vh - 50px);
  margin-top: -50px;
  background: url("../../../../static/img/totem/header.png") no-repeat 40% 150% / 70%;
  width: 100vw;
  h2 {
    color: ${c.accent};
    font-weight: bold;
  }
`
