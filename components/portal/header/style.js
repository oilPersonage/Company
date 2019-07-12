import styled from 'styled-components'
import c from '../../../styled/color'


export const Img = styled.div`
  background: url('../../../static/img/asvk/header.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: 1s ease-out;
  width: 100%;
  height: auto;
  object-fit: contain;
`

export const HeaderImg = styled.div`
  height: 100%;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: url(#myClip);
  // background-color: #000;
  width: 100%;
  padding: 250px 650px 100px 50px;
  background: linear-gradient(180deg, rgba(196, 196, 196, 0.05) 0%, rgba(196, 196, 196, 0.651042) 64.38%, rgba(196, 196, 196, 0.86) 68.42%, rgba(196, 196, 196, 0.489583) 72.01%, rgba(196, 196, 196, 0.51) 100%);
  &:hover {
    ${Img} {
        transform: scale(1.05)
      }
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
    font-size: 16px
  }
`
export const Advantage = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
`
export const Item = styled.div`
  animation: AnimationTextLeft 0.7s ease forwards;
  display: flex;
  align-items: center;
  opacity: 0;
  margin: 8px 0;
  img {
      width: ${p => p.logo && '26px'};
      margin-bottom: ${p => p.logo && '3px'}
  }
  &:nth-child(1) {
    animation: AnimationTextLeft 0.7s ease 0.4s forwards;
  }
  &:nth-child(2) {
    animation: AnimationTextLeft 0.7s ease 0.5s forwards;
  }
  &:nth-child(3) {
    animation: AnimationTextLeft 0.7s ease 0.6s forwards;
  }
  &:nth-child(4) {
    animation: AnimationTextLeft 0.7s ease 0.7s forwards;
  }
`
export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-right: 30px;
  border-radius: 50%;
  background-color: ${c.accent};
  img {
    width: 20px;
    object-fit: cover;
  }
`

export const Arrow = styled.svg`
  position: absolute;
    top: 50%;
    right: 39%;
    width: 40px !important;
    height: auto;
    cursor: pointer;
    &:hover {
        path {
            fill: ${c.accent}
        }
    }
    path {
        transition: 0.15s ease-out
    }
`
