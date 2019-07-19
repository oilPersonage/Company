import styled from 'styled-components'
import c from '../../../../styled/color'

export const BodyContainer = styled.div`
  min-height: 1600px;
  margin: 100px 0 0;
  display: flex;
  justify-content: center;
  > div {
    width: 40%;
    img {
      width: 100%;
    }
  }
`
export const RightBox = styled.div`
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  margin-top: 170px;
`
export const Item = styled.div`
  margin-bottom: ${p => `${p.m}px`};
  position: relative;
  &.show {
    h4, p {
      transform: translateX(0);
      opacity: 1;
    }
  }
  &:after {
    position: absolute;
    content: '';
    height: 2px;
    width: 50px;
    background-color: ${c.accent};
    top: 50%;
    left: -80px;
    transform: translateY(-50%);
  }
  h4 {
    font-size: 24px;
    color: ${c.accent};
    margin-bottom: 5px;
    transition: 0.3s ease-out !important;
  }
  p, h4 {
    opacity: 0;
    transform: translateX(200px);
    transition: 0.3s ease-out 0.1s;
  }
`
