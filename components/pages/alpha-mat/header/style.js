import styled from 'styled-components'
import c from '../../../../styled/color'

export const HeaderBox = styled.div`
  background: url("../../../../static/img/alpha-mat/header.jpg") 50% no-repeat;
  width: 100vw;
  height: calc(100vh - 50px);
  background-size: cover;
  h1 {
    color: ${c.white};
    padding-top: 15px;
  }
  p {
    text-align: center;
    color: ${c.white};
  }
  @media(max-width: 600px) {
    background-position: 50% 0;
    height: 400px;
    > div {
      margin-bottom: 15px;
    }
    h1 span {
      margin-top: 15px;
    }
  }
`
