import styled from 'styled-components'
import c from '../../../../styled/color'

export const EsmBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  > p {
    max-width: 700px;
    text-align: center;
    margin-bottom: 100px;
  }
  @media(max-width: 1024px) {
    padding: 0 15px;
  }
`
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  @media(max-width: 600px) {
    width: 100%;
    h3, p {
      text-align: center;
    }
    p {
      font-size: 14px;
      padding: 0;
    }
  }
`
export const Title = styled.h3` 
  color: ${c.accent};
  font-weight: bold;
  text-transform: uppercase;
`
export const Body = styled.div`
  max-width: 1170px;
  align-items: center;
  margin: 0 auto 100px;
  display: flex;
  justify-content: space-between;
  &:last-child {
    margin-bottom: 0;
    > div {
      margin-right: 50px;
    }
  }
  h3 {
    margin-bottom: 15px;
    font-size: 20px;
    text-transform: uppercase;
    color: ${c.accent};
  }
  p {
    font-size: 18px;
    padding-left: ${p => p.noPadding ? 0 : '15px'};
    margin-bottom: 5px;
    &:first-child {
      margin-bottom: 15px;
      padding-left: 0;
    }
  }
  img {
    max-width: 60%;
  }
  
  @media(max-width: 1024px) {
    h3 {
      line-height: 1.4;
    }
  }
  @media(max-width: 600px) {
    flex-direction: column;
    img {
      max-width: 100%;
      margin-bottom: 30px;
    }
    margin-bottom: 0;
    h3 {
      text-align: center;
    }
    &:last-child > div {
      margin-right: 0;
      p {
        text-align: center;
        margin-bottom: 30px;
      }
    }
  }
`
export const Box = styled(Right)`
  margin-bottom: 25px;
`
