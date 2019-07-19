import styled from 'styled-components'
import c from '../../../styled/color'

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${p => p.right ? 'row-reverse' : 'row'};
  position: relative;
  &:nth-child(2n) {
    height: 300px;
  }
  div {
    margin: 0 40px;
    img {
      width: 100%;
    }
    width: 50%;
    span {
      display: block;
    }
    @media(max-width: 1024px) {
      margin: 0 15px;
    }
    @media(max-width: 600px) {
      margin: 0 7.5px;
    }
  }
  @media(max-width: 600px) {
    &:nth-child(2n) {
        height: 150px;
      }
  }
`

export const TextBox = styled.div`
  &.show {
     h2 {
      opacity: 1;
      transform: translateY(0px);
     }
     h3 {
      opacity: 1;
      transform: translateY(0px);
     }
     h4 {
      opacity: 1;
      transform: translateY(0px);
     }
  }
  h2 {
    opacity: 0;
    transition: 0.3s ease-out;
    transform: translateY(-100px);
    font-size: 48px;
    color: ${c.accent};
    span {
      font-weight: bold;
      color: ${c.text};
      font-size: 48px;
    }
  }
  h3 {
    opacity: 0;
    transition: 0.3s ease-out 0.1s;
    transform: translateY(-100px);
    font-size: 36px;
    font-weight: normal;
    color: ${c.accent};
    margin-bottom: 25px;
  }
  h4 {
    opacity: 0;
    font-weight: 100;
    transition: 0.3s ease-out 0.2s;
    transform: translateY(-100px);
    font-size: 18px;
  }
  display: flex;
  flex-direction: column;
  text-align: ${p => p.right ? 'right' : 'left'};
  @media(max-width: 1024px) {
    h2 {
      font-size: 30px;
      span {
        font-size: inherit;
      }
    }
    h3 {
      font-size: 24px;
      margin-bottom: 5px;
    }
    h4 {
      font-size: 16px;
      line-height: 1.4;
    }
  }
  @media(max-width: 600px) {
    h2 {
      font-size: 14px;
      line-height: 1;
      span {
        margin-top: 5px;
        font-size: inherit;
      }
      margin-bottom: 20px;
    }
    h3 {
      font-size: 16px;
      margin-bottom: 5px;
    }
    h4 {
      font-size: 14px;
      line-height: 1.2;
    }
  }
`
