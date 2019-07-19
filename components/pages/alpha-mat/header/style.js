import styled from 'styled-components'
import c from '../../../../styled/color'

export const HeaderBox = styled.div`
  background: url("../../../../static/img/alpha-mat/header.jpg") 50% no-repeat;
  width: 100vw;
  height: calc(100vh - 50px);
  background-size: cover;
  h1 {
    color: ${c.white};
  }
  p {
    text-align: center;
    color: ${c.white};
  }
`
