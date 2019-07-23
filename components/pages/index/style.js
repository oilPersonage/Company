import styled, {keyframes} from 'styled-components'
import c from '../../../styled/color'

export const PageBox = styled.div`
  height: 100vh;
  margin-top: -50px;
  overflow: hidden;
  width: 100%;
`
export const ScreenBox = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const ScrollBox = styled.div`
  height: 100%;
  transition: 0.5s cubic-bezier(.1,.3,.33,.99);
  background-repeat: no-repeat;
  background-size: contain;
  background-attachment: fixed;
`
export const ScreenBoxPortal = styled(ScrollBox)`
  display: flex;
  transform: ${p => p.anim ? `translateX(-100%)` : 'none'};
  transition: transform 1s cubic-bezier(.1,.3,.33,.99);
  height: 100vh;
  background: url('../../../static/img/index/1.jpg') no-repeat 50% / cover;
  @media(max-width: 1024px) {
    background-position: 80% 0;
  }
  @media(max-width: 600px) {
    background: linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.8)), url('../../../static/img/index/1.jpg') no-repeat 50% / cover;
    background-position: 80% 0;
  }
`
export const ScreenBoxAsvk = styled(ScrollBox)`
  background: url('../../../static/img/index/2-2.jpg')  no-repeat 50% / cover;
  > div {
    align-items: flex-end;
    text-align: right;
    padding-left: 0;
    padding-right: 200px;
    //padding-top: 200px;
  }
  @media(max-width: 1024px) {
    background-position: 20% 100%;
  }
  @media(max-width: 600px) {
    > div {
      padding-top: 0;
      padding-right: 0;
    }
    background: linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.8)), url('../../../static/img/index/2-2.jpg') no-repeat 50% / cover;
    background-position: 20% 100%;
  }
`
export const ScreenBoxParus = styled(ScrollBox)`
  transform: ${p => p.anim ? `translateX(-100%)` : 'none'};
  transition: transform 1s cubic-bezier(.1,.3,.33,.99);
  background: url('../../../static/img/index/3-1.jpg') no-repeat 50% / cover;
  @media(max-width: 600px) {
    background: linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.8)), url('../../../static/img/index/3-1.jpg') no-repeat 50% / cover;
    background-position: 90% 0%;
  }
  @media(max-width: 1024px) {
    background-position: 90% 0%;
  }
`
export const ScreenBoxOtherSystem = styled(ScrollBox)`
`
export const ScrollToSlide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  top: 50%;
  right: 50px;
  transform: translateY(-50%);
  line-height: 0.8;
  cursor: pointer;
  @media(max-width: 600px) {
    right: 15px;
  }
`
export const LineAnimation = styled(ScrollToSlide)`
    position: absolute;
    z-index: 1;
    top: 50%;
    right: 0;
    height: 100px;
    transition: transform ease-out 200ms;
    filter: url("#shadowed-goo");
    @media(max-width: 600px) {
      right: 0px;
    }
`
export const Line = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  transition: 0.15s ease-out;
  background: ${c.accent};
`
export const LineAfter = styled.div`
  position: relative;
  top: -20px;
  left: -5px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  transition: 0.15s ease-out 0.1s;
  background: ${c.accent}
`
export const ScrollNumber = styled.div`
  z-index: 2;
  padding: 8px 10px;
  transition: 0.15s ease-out;
  color: ${c.white};
  font-size: ${p => p.active ? '18px' : '12px'};
  &:hover {
    color: ${p => p.active ? c.white : c.accent};
  }
`

const AnimationName = keyframes`
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1
}
`
const AnimationSystem = keyframes`
  0% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1
}
`

const AnimationSystemR = keyframes`
  0% {
    transform: translateX(200px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1
}
`

export const Box = styled.div`
  display: flex;
  height: 100%;
  min-width: 100vw;
  padding-left: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h2 {
    color: ${c.accent};
    transition: 0.3s ease-out 0.1s;
    transform: ${p => p.active ? 'translateY(0)' : 'translateY(-100px)'};
    opacity: ${p => p.active ? 1 : 0};
    @media(max-width: 1024px) {
      margin-bottom: 5px;
      text-shadow: 0 1px 1px rgba(0,0,0,0.5);
    }
  }
  @media(max-width: 1024px) {
    padding-left: 100px;
  }
  @media(max-width: 600px) {
    padding: 0 15px;
    h2 {
      font-size: 20px;
      max-width: 90%;
      text-align: center;
      margin: 0 auto 15px;
    }
    p {
      text-align: center !important;
      //max-width: calc(100% - 30px) !important;
    }
  }
`
export const DescriptionSystem = styled.div`
  max-width: 500px;
  transition: 0.3s ease-out 0.2s;
  transform: ${p => p.active ? 'translateX(0)' : p.right ? 'translateX(200px)' : 'translateX(-200px)'};
  opacity: ${p => p.active ? 1 : 0};
  //animation: ${p => p.right && p.active ? AnimationSystemR : p.active && AnimationSystem} 0.3s ease-out forwards 0.7s;
  p {
    font-family: RobotoL;
    margin: 0 auto;
    line-height: 1.4;
    color: ${c.white};
    font-size: 18px;
  }
  @media(max-width: 600px) {
    margin: 0 auto;
    max-width: 90%;
  }
`
const linkAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 ${c.accent}
  }
  100% {
    box-shadow: 0 0 1px 5px transparent
  }
`

export const LinkToSystem = styled.a`
  display: inline-block;
  position: relative;
  top: 50px;
  padding: 15px 25px;
  font-size: 16px;
  font-family: RobotoL;
  text-transform: none;
  opacity: 0;
  cursor: pointer;
  color: ${c.white};
  border-radius: ${c.border};
  background: linear-gradient(to top, ${c.accent}, #fc7526);
  animation: ${p => p.right && p.active ? AnimationSystemR : p.active && AnimationSystem} 0.3s cubic-bezier(0, 0.87, 0.71, 1.24) forwards 0.3s;
  &:hover {
      animation: ${p => p.right && p.active ? AnimationSystemR : p.active && AnimationSystem} 0.3s cubic-bezier(0, 0.87, 0.71, 1.24) forwards 0.3s, ${p => p.active && linkAnimation} 0.3s ease-out
  }
  @media(max-width: 600px) {
    margin: 0 auto;
  }
`

export const OtherBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  padding-top: 50px;
  background: #fdfdfd;
  > a {
    display: block;
    position: relative;
    margin: 7.5px;
    width: calc(33.3% - 15px);
    height: calc(50% - 15px);
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    cursor: pointer;
    &:hover {
      img {
        transform: scale(1.06);
      }
    }
  }
  @media(max-width: 600px) {
    background: #000;
    padding: 50px 0 52.5px;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      margin: 2.5px;
      width: calc(33.3% - 5px);
      height: calc(50% - 5px);
      p {
        text-align: center;
      }
      &:after {
        content: '';
        z-index: 2;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.8;     
      }
    }
  }
`

export const Img = styled.img`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 1s ease-out;
`
export const OtherTitle = styled.h4`
  color: inherit;
  font: 38px RobotoB;
  text-transform: uppercase;
  margin-bottom: 0.2em;
  @media(max-width: 1024px) {
    margin-top: 30px;
    font-size: 18px;
  }
  @media(max-width: 600px) {
    text-align: center;
    margin-top: 15px;
    font-size: 14px;
    color: ${c.accent}
  }
`
export const OtherDescr = styled.p`
  color: inherit;
  font-size: 18px;
  @media(max-width: 600px) {
    font-size: 14px;
  }
`
export const OtherTextBox = styled.div`
  position: relative;
  display: flex;
  padding: 15px;
  flex-direction: column;
  align-items: ${p => p.center ? "center" : 'flex-start'};
  z-index: 3;
  color: ${p => c[p.c] || c.white};
  @media(max-width: 600px) {
    padding: 5px;
    align-items: center;
    color: ${c.white};
  }
`
