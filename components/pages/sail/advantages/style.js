import styled from 'styled-components'
import c from '../../../../styled/color'

export const AdvantageBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 150px 0 50px;
  @media(max-width: 1024px) {
    flex-direction: column;
  }
  @media(max-width: 600px) {
    margin-top: 0;
    flex-direction: column;
  }
`
export const ItemBox = styled.div`
  display: flex;
  max-width: calc(100vw / 3);
  padding: 0 50px;
  justify-content: center;
  text-align: center;
  width: 100%;
  flex-direction: column;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    height: 100px;
    width: 1px;
    background: ${c.accent};
    top: 50%;
    right: -0px;
    transform: translateY(-50%);
  }
  object {
    margin-bottom: 30px;
    height: 70px;
    svg {
      height: 70px;
      path {
        fill: ${c.accent}
      }
    }
  }
  p {
    font-size: 18px;
  }
  h4 {
    margin-bottom: 25px;
    font-size: 20px;
    text-transform: uppercase;
  }
  &:last-child {
    &:after {
      display: none;
    }
  }
  @media(max-width: 1024px) {
    max-width: 100%;
    margin-bottom: 30px;
    &:after {
      display: none;
    }
  }
  @media(max-width: 600px) {
    margin-bottom: 50px;
    h4 {
      line-height: 1.4;
      font-size: 16px;
    }
    p {
      font-size: 14px;
    }
  }
`
