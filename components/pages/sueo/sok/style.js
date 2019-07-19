import styled from 'styled-components'
import c from '../../../../styled/color'

export const Body = styled.div`
  display: flex;
  padding: 0 150px;
  justify-content: center;
  align-items: center;
  p {
    max-width: 400px;
    margin: 15px 0;
    font-size: 18px;
  }
  div {
    margin-right: 50px;
  }
  img {
    max-width: 45%;
  }
  @media(max-width: 1024px) {
    flex-direction: column;
    max-width: 100%;
    padding: 0 15px;
    p {
      margin: 15px 0;
      min-width: 100%;
      font-size: 14px;
      text-align: center;
    }
    > div {
      order: 1;
      margin-right: 0;
      width: 100%;
    }
    img {
      order: 0;
      margin-bottom: 30px;
    }
  }
`
export const Title = styled.p`
  font-weight: bold;
  font-size: 22px !important;
  text-transform: uppercase;
  color: ${c.accent};
  @media(max-width: 1024px) {
    text-align: center;
    margin: 0 !important;
  }
`
export const SokBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    text-align: center;
    max-width: 650px;
    margin-bottom: 30px;
  }
`
