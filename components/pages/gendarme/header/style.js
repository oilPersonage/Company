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
  @media(max-width: 600px) {
    font-weight: 100;
    margin-top: 80px;
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
  @media(max-width: 1024px) {
    padding: 0 15px;
    height: 100vh;
    background-position: 55% 0;
    > div {
      margin-left: 40%;
      margin-top: 30%;
      margin-right: 0;  
      p {
        font-size: 14px;
      }
    } 
  }
  @media(max-width: 600px) {
    background-position: 50% 0;
    > div {
      h2 {
        margin-bottom: 15px;
      }
      p:last-child {
        margin-top: 10px;
      }
      margin-top: 0;
    }
  }
`
