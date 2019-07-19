import styled, {keyframes, css} from 'styled-components'
import {createGlobalStyle} from 'styled-components'
// import React from 'react'
import c from './color.js'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "RobotoL";
    src: url('/static/fonts/Roboto/Roboto-Light.ttf');
  }
  @font-face {
    font-family: "Roboto";
    src: url('/static/fonts/Roboto/Roboto-Regular.ttf');
  }
  @font-face {
    font-family: "RobotoB";
    src: url('/static/fonts/Roboto/Roboto-Bold.ttf');
    
  }
* {
  font-family: Roboto;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 0.8;
  color: ${c.text};
  user-select: none;
  margin: 0;
  padding: 0;
}
body {
    font-size: 0;
    overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6, ul {
    padding: 0;
    margin: 0;
    line-height: 0.8;
}

h1 {
    font: 36px RobotoL;
    margin-bottom: 50px;
    @media(max-width: 1366px) {
      font-size: 24px;
      margin-bottom: 30px;
      p {
        span {
          margin-top: 10px !important;
        }
      } 
    }
}

h2 {
    font-family: RobotoB;
    text-transform: uppercase;
    font-style: normal;
    font-size: 36px;
    margin-bottom: 35px;
    line-height: 1.4;
    span {
      font-size: inherit;
      color: ${c.accent};
    }
    @media(max-width: 600px) {
      font-size: 18px;
    }
}
//@keyframes AnimationName {
//  0%{
//    transform: translateY(-100px);
//    opacity: 0;
//  }
//  100% {
//    transform: translateY(0);
//    opacity: 1;
//  }
//}
//h2.active {
//  animation: AnimationName 0.3s ease-out forwards 0.5s;
//}

p {
    line-height: 1.2;
    font-weight: 100;
    @media(max-width: 600px) {
      font-size: 14px;
    }
}

a {
    text-decoration: none;
    color: #fff;
}
.page-transition-enter-done, .page-transition-exit, .page-transition-enter-active, .page-transition-enter,  .page-transition-exit-active {
  width: 100%;
}
ul {
    list-style: none;
}

@keyframes AnimationText {
 0% {
    opacity: 0;
    transform: translateY(-50px);
 } 100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes AnimationTextLeft {
 0% {
    opacity: 0;
    transform: translateX(-50px);
 } 100% {
    opacity: 1;
    transform: translateX(0px);
  }
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    background-color: transparent;
}

::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
}

::-webkit-scrollbar-thumb {
    border-radius: 3px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${c.accent};
}
`

const St = {
  Body: styled.div`
  `
}

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`

const AnimationPage = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Container = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  animation: ${AnimationPage} 0.3s ease-out;
`

export const SueoContainer = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${AnimationPage} 0.3s ease-out;
`

const animationShow = () => {
  return keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`
}

export const Item = styled.div`
  opacity: 0;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
  border-radius: 3px;
  font-weight: 100;
  background-color: ${c.accentl};
  animation: ${p => css`0.3s ${p.show && animationShow} ease-out forwards ${p.index / 10 * 2}s`};
  &:nth-child(2n) {
      background-color: transparent;
  }
  p {
    font-size: inherit;
    max-width: 50%;
  }
  @media(max-width: 600px) {
    font-size: 14px;
  }
`

export const PropertiesBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 650px;
  @media(max-width: 1366px) {
    width: 100% !important;
    padding: 0 15px;
    margin: 0 auto;
  }
`
export const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 0;
  padding-top: 50px;
  text-transform: uppercase;
  span {
    font-size: inherit;
    font-weight: bold;
    display: block;
    margin-top: 30px;
    color: ${c.accent}
  }
`
export const SendMessage = styled.div`
  position: relative;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: 100px;
  @media(max-width: 998px) {
     margin-bottom: 150px;
  }
  @media(max-width: 600px) {
    max-width: 100%;
    overflow: hidden;
    padding: 0 15px 100px;
    margin-bottom: 50px;
  }
`
export const FormBody = styled.form`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 24px;
    margin-bottom: 30px;
  }
  input, textarea {
    margin-bottom: 30px;
    background: transparent;
    padding: 10px 15px;
    min-width: 400px;
    box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    border: 1px solid transparent;
    @media(max-width: 600px) {
      min-width: calc(100vw - 30px);
    }
    &:focus {
      outline: none;
      border: 1px solid ${c.accent};
    }
  }
    
  textarea {
    min-height: 200px;
    border: none;
    margin-bottom: 0;
    width: 100%;
  }
`
export const Title = styled.h3`
  align-items: center
`
export const SectionHead = styled.div`
 text-align: center;
 margin-bottom: 50px;
 @media(max-width: 1366px) {
    h1 {
      margin: ${p => p.margin || '0 0 30px 0'};
    }
 }
`
export const SectionTitle = styled.h2`
 text-align: center;
 margin: ${p => p.margin || '0 0 30px 0'};
 padding-top: 100px;
 @media(max-width: 600px) {
  padding-top: 50px;
 }
`
export const ContactBox = styled.div`
 display: flex;
 flex-direction: column;
 max-width: 1700px;
 width: 100%;
 padding: 100px 0;
 margin: 0 auto;
 @media(max-width: 600px) {
  padding: 50px 0 100px;
 }
`

export const DescriptionTitle = styled.p`
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.4;
  font-size: 18px;
  font-weight: 100;
  @media(max-width: 600px) {
    font-size: 16px;
    padding: 0 15px;
  }
`

export const LinkToForm = styled.a`
  padding: 15px 25px;
  font-size: 16px;
  display: block;
  margin-top: 15px;
  width: max-content;
  font-family: RobotoL;
  text-transform: none;
  cursor: pointer;
  color: ${c.white};
  border-radius: ${c.border};
  background: linear-gradient(to top, ${c.accent}, #fc7526);
`

const linkAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 ${c.accent}
  }
  100% {
    box-shadow: 0 0 1px 5px transparent
  }
`

export const Header = styled.div`
  height: calc(100vh - 50px);
  overflow: hidden;
  min-width: 100vw;
  position: relative;
  background-color:#fff;
  z-index: ${p => p.index ? 10 : 1};
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  margin-top: ${p => p.index ? 0 : '-50px'};
  @media(max-width: 600px) {
    flex-direction: column;
    height: auto;
  }
`

export const ButtonSend = styled.button`
  display: inline-block;
  position: relative;
  top: 50px;
  padding: 15px 25px;
  font-size: 16px;
  font-family: RobotoL;
  text-transform: none;
  opacity: 1;
  border: none;
  cursor: pointer;
  color: ${c.white};
  border-radius: ${c.border};
  background: linear-gradient(to top, ${c.accent}, #fc7526);
  &:hover {
    animation: ${linkAnimation} 0.3s ease-out forwards;
  }
`
export const Svg = styled.svg`
  position: absolute;
  align-items: center;
  fill: ${c.accentl};
  bottom: ${p => p.circle ? '-10%' : 'auto'};
  top: ${p => p.circle ? 'auto' : '15%'};
  left: ${p => p.circle ? '-50%' : 'auto'};
  right: ${p => p.circle ? 'auto' : '-100px'};
  width: ${p => p.circle ? '400px' : '190px'};
  @media(max-width: 600px) {
    display: none;
  }
`

export const Advantage = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  p {
    font-size: 18px;
  }
  @media(max-width: 1366px) {
    p {
      font-size: 16px;
    }
  }
  @media(max-width: 1024px) {
    margin-top: 0;
  }
  @media(max-width: 600px) {
    margin-top: 15px;
    p {
      font-size: 14px;
    }
  }
`
export const ItemIcon = styled.div`
  animation: AnimationTextLeft 0.7s ease forwards;
  display: flex;
  align-items: center;
  opacity: 0;
  margin: 8px 0;
  img {
      width: ${p => p.logo && '26px'};
      margin-bottom: ${p => p.logo && '3px'}
  }
  p {
    color: ${p => p.white ? c.white : c.text};
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
  
  @media(max-width: 600px) {
    p {
      font-size: 14px !important;
    }
  }
`
export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  min-width: 40px;
  margin-right: 30px;
  border-radius: 50%;
  background-color: ${c.accent};
  img {
    width: 20px;
    object-fit: cover;
  }
  @media(max-width: 998px) {
    margin-right: 15px;
  }
`

export {St, Body, GlobalStyle, Container}
