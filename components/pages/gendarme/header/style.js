import styled from 'styled-components'
import c from '../../../../styled/color'

export const Title = styled.h1`
  color: ${c.white};
  text-transform: uppercase;
  font-weight: bold;
  opacity: 1;
  text-align: center;
  margin-top: 100px;
  span {
    color: ${c.accent};
    font-size: inherit;
  }
`
export const Name = styled.h2`
  color: ${c.white};
`
export const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-top: -50px;
  width: 100vw;
  background: url('../../../../static/img/gendarme/header.jpg') no-repeat 50% / cover;
  align-items: center;
  > div {
    margin-left: 65%;
    margin-top: 100px;
    margin-right: 10%;
    p {
      color: ${c.white};
      font-size: 18px;
    }
    > p:last-child {
      margin-top: 30px;
    }
  }
`
