import styled, {keyframes, css} from 'styled-components'
import c from '../../styled/color'

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
  transition: 0.5s ease-in-out;
  background-repeat: no-repeat;
  background-size: contain;
  background-attachment: fixed;
`
export const ScreenBoxPortal = styled(ScrollBox)`
  display: flex;
  transform: ${p => p.anim ? `translateX(-100%)` : 'none'};
  transition: transform 1s ease-out;
  height: 100vh;
  background: url('../../static/img/index/1.jpg')
`
export const ScreenBoxAsvk = styled(ScrollBox)`
  background: url('../../static/img/index/2-2.jpg');
  transform: ${p => p.anim ? `translateX(-100%)` : 'none'};
  > div {
    align-items: flex-end;
    text-align: right;
    padding-left: 0;
    padding-right: 200px;
  }
`
export const ScreenBoxParus = styled(ScrollBox)`
  background: url('../../static/img/index/3-1.jpg')
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
`
export const LineAnimation = styled(ScrollToSlide)`
    position: absolute;
    z-index: 1;
    top: 50%;
    right: 0;
    height: 100px;
    transition: transform ease-out 200ms;
    filter: url("#shadowed-goo")
`
export const Line = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  transition: 0.15s ease-out;
  background: ${c.accent}
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
    animation: AnimationText 0.5s ease-out;
    transition: 0.3s ease-out 0.1s;
    //transform: ${p => p.active ? 'translateY(0)' : 'translateY(-100px)'};
    //opacity: ${p => p.active ? 1 : 0};
  }
`
export const DescriptionSystem = styled.div`
  max-width: 500px;
  transition: 0.3s ease-out 0.2s;
  opacity: 0;
  animation: AnimationText 0.3s ease-out 0.3s forwards;
  transform: ${p => p.active ? 'translateX(0)' : p.right ? 'translateX(200px)' : 'translateX(-200px)'};
  //opacity: ${p => p.active ? 1 : 0};
  //animation: ${p => p.right && p.active ? AnimationSystemR : p.active && AnimationSystem} 0.3s ease-out forwards 0.7s;
  p {
    font-family: RobotoL;
    margin: 0 auto;
    line-height: 1.4;
    color: ${c.white};
    font-size: 18px;
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
`

export const OtherBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  padding-top: 50px;
  background: #fdfdfd;
  > div {
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
`
export const Sok = styled.div`
`
export const Pulpit = styled.div`
`
export const Totem = styled.div`
`
export const Gendarme = styled.div`
`
export const Alphamat = styled.div`
`
export const Monolit = styled.div`
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
`
export const OtherDescr = styled.p`
  color: inherit;
  font-size: 18px;
`
export const OtherTextBox = styled.div`
  position: relative;
  display: flex;
  padding: 15px;
  flex-direction: column;
  align-items: ${p => p.center ? "center" : 'flex-start'};
  z-index: 3;
  color: ${p => c[p.c] || c.white};
`
