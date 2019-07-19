import styled from 'styled-components'
import c from '../../../../styled/color'


export const Img = styled.div`
  background: ${p => p.portal2 ? `url('../../../static/img/asvk/header2.png')` : `url('../../../static/img/asvk/header.png')`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: 1s ease-out;
  width: 100%;
  height: auto;
  object-fit: contain;
  @media(max-width: 1024px) {
    clip-path: none;
    display: flex;
    flex: 1;
    transform: scale(1.8) translateX(10%);
    position: relative;
  }
  @media(max-width: 600px) {
    height: 100%;
    transform: scale(1);
    top: 0;
    background-position: 50%;
  }
`

export const HeaderImg = styled.div`
  height: 100%;
  display: flex;
  position: absolute;
  top: 0;
  clip-path: url(#myClip);
  left: 0;
  // background-color: #000;
  width: 100%;
  padding: ${p => !p.p ? '250px 650px 100px 50px' : 0};
  background: linear-gradient(180deg, rgba(196, 196, 196, 0.05) 0%, rgba(196, 196, 196, 0.651042) 64.38%, rgba(196, 196, 196, 0.86) 68.42%, rgba(196, 196, 196, 0.489583) 72.01%, rgba(196, 196, 196, 0.51) 100%);
  &:hover {
    ${Img} {
        transform: scale(1.05)
      }
  } 
  @media(max-width: 1366px) {
    clip-path: none;
    display: flex;
    flex: 1;
    padding: 250px 50px 100px;
    position: relative;
  }
  @media(max-width: 600px) {
    height: 50vh;
    padding: 100px 50px 0px;
  }
`
export const RightBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  max-width: 650px;
  height: 100%;
  padding: 60px;
  position: relative;
  @media(max-width: 1366px) {
    background-color: ${c.white};
    max-width: 500px;
  }
  @media(max-width: 1024px) {
    background-color: ${c.white};
    max-width: 350px;
    z-index: 2;
    padding: 60px 25px;
    box-shadow: -1px 0 10px rgba(0,0,0,.2);
  }
  @media(max-width: 600px) {
    background-color: rgba(255,255,255,.9);
    max-width: 100%;
    padding: 30px 15px;
    box-shadow: none;
  }
`
export const Title = styled.h1`
  p {
    font-size: inherit;
    font-family: inherit;
    opacity: 0;
    animation: AnimationTextLeft 0.7s ease forwards;
    span {
      display: block;
      text-transform: uppercase;
      color: ${c.accent};
      font-family: RobotoB;
      font-size: inherit;
      margin-top: 30px;
    }
  }
`
export const ExtraTitle = styled.div`
  opacity: 0;
  animation: AnimationTextLeft 0.7s ease 0.1s forwards;
  p {
    color: ${c.text};
    font-size: 18px;
    margin-bottom: 10px;
    span {
      text-transform: uppercase;
      font-weight: bold;
      font-size: inherit;
      color: ${c.accent};
    }
  }
  @media(max-width: 1366px) {
    p {
      font-size: 16px;
    }
  }
  @media(max-width: 1024px) {
    p {
      font-size: 16px;
    }
    margin-bottom: ${p => p.last ? '15px' : 0};
  }
`

export const Arrow = styled.svg`
  position: absolute;
  top: 50%;
  right: ${p => p.right ? '39%' : '90%'};
  transform: ${p => !p.right ? 'rotate(180deg)' : 'none'};
  width: 40px !important;
  height: auto;
  filter: drop-shadow(0 0 5px rgba(0,0,0,.2));
  cursor: pointer;
  &:hover {
      path {
          fill: ${c.accent}
      }
  }
  path {
      transition: 0.15s ease-out
  }
  @media(max-width: 1366px) {
    right: ${p => p.right ? '50px' : '90%'};
    width: 30px !important;
  }
  @media(max-width: 600px) {
    right: ${p => p.right ? '15px' : '88%'};
    width: 15px !important;
    top: calc(50% + 15px);
  }
`
