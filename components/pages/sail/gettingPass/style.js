import styled from 'styled-components'
import c from '../../../../styled/color'

export const Body = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  padding: 100px 0 50px;
  background: url('../../../../static/img/sail/black-white.jpg') no-repeat 50% 100%;
  background-size: cover;
  clip-path: url('#clipPass');
  svg {
    height: 0;
    width: 0;
  }
  > div {
    width: calc(50% - 280px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &:before {
      position: absolute;
      content: '1';
      font-size: 200px;
      font-weight: bold;
      left: 100px;
      bottom: 100px;
      color: ${c.accent};
      opacity: 0.3;
    }
    &:last-child {
      &:before {
        left: auto;
        right: 100px;
        content: '2';
      }
    }
  }
  @media(max-width: 1024px) {
    > div {
      width: calc(50% - 15px);
    }
  }
  @media(max-width: 600px) {
    justify-content: space-around;
    clip-path: none;
    padding-top: 200px;
    background: linear-gradient(to right, black 50%, white 50%);
    > div {
      width: calc(100% - 10px);
      margin: 0 auto;
      &:before {
        bottom: auto;
        top: 50px;
        left: 20%;
        font-size: 90px;
        opacity: 1;
      }
      &:last-child {
        &:before {
          left: auto;
          right: 20%;
        }
      }
    }
  }
`
export const Item = styled.p`
  display: flex;
  text-transform: uppercase;
  color: ${p => p.left ? c.white : c.text};
  position: relative;
  padding: 0;
  margin: 15px 0;
  max-width: 180px;
  line-height: 1.4;
  text-align: center;
  font-size: 18px;
  font-weight: normal;
  &:last-child {
    &:after {
      content: none;
    }
  }
  &:after {
    position: absolute;
    content: '';
    width: 2px;
    height: 10px;
    background: ${c.accent};
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
  }
  @media(max-width: 600px) {
    font-size: 14px;
  }
`
