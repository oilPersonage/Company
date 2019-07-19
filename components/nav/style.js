import styled, {keyframes} from 'styled-components'
import c from '../../styled/color'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 11;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 5px 30px;
  background-color: #fff;
  box-shadow: ${c.shadow};
  @media(max-width: 1024px) {
    padding: 10px 10px;
    right: 0;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-between;
    bottom: 0;
    background-color: #000;
  }
`
export const NavBox = styled.div`
  display: flex;
  &.show {
    transition: 0.5s cubic-bezier(0,0,.57,1);
    padding-top: 50px;
    a {
      opacity: 1;
      transition: 0.3s ease-out;
      transform: scaleY(1);
    }
  }
  &.hide {
    transition: 0.5s cubic-bezier(.56,.01,1,1);
    a {
      opacity: 0.2;
      transform: scaleY(0.6);
    }
  }
  @media(max-width: 1024px) {
    padding-top: 0px;
    a {
      opacity: 0;
      transition: 0.3s ease-out 0.3s;
      transform: scaleY(0.6);
    }
    order: 3;
    //transition: 0.7s linear;
    max-height: ${p => !p.active ? '0' : '100vh'};
    overflow: hidden;
    right: 0;
    top: 50px;
    display: flex;
    position: fixed;
    justify-content: flex-start;
    text-transform: uppercase;
    height: calc(100vh - 100px);
    width: 100%;
    bottom: 0;
    margin-bottom: 50px;
    flex-direction: column;
    background-color: #000;
  }
`

export const Item = styled.a`
  display: flex;
  align-items: center;
  margin: 0 35px;
  transition: 0.15s ease-out;
  cursor: pointer;
  color: ${p => p.active ? c.accent : c.text};
  animation: AnimationText 0.3s ease-out;
  &:hover {
    color: ${c.accent};
  }
  @media(max-width: 1024px) {
    margin: 0 15%;
    justify-content: center;
    padding: 15px 0;
    color: ${c.white};
    position: relative;
    &:after {
      position: absolute;
      content: '';
      height: 1px;
      width: 15px;
      background: ${c.accent};
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`

export const HamburgerBox = styled.div`
    z-index: 11;
    order: 0;
    display: none;
    --front: ${c.accent};
    transform: rotate(180deg);
    --back: #000;
    --icon: white;
    -webkit-perspective: 600px;
            perspective: 600px;
    width: 40px;
    height: 40px;
    position: relative;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    div span {
      --rotateY: 0deg;
      --background: var(--front);
      -webkit-transform: rotateY(var(--rotateY));
              transform: rotateY(var(--rotateY));
      -webkit-transform-style: preserve-3d;
              transform-style: preserve-3d;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: var(--background);
      -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
      transition: -webkit-transform 0.6s cubic-bezier(0.2, 0.64, 0.48, 1.24);
      transition: transform 0.6s cubic-bezier(0.2, 0.64, 0.48, 1.24);
      transition: transform 0.6s cubic-bezier(0.2, 0.64, 0.48, 1.24), -webkit-transform 0.6s cubic-bezier(0.2, 0.64, 0.48, 1.24);
    }
    div span:before, div span:after {
      --rotate: 0deg;
      content: '';
      position: absolute;
      width: 14px;
      height: 2px;
      border-radius: 1px;
      top: 50%;
      left: 50%;
      background: var(--icon);
      -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
      -webkit-transform: translate(-50%, -50%) rotate(var(--rotate)) translateZ(6px);
              transform: translate(-50%, -50%) rotate(var(--rotate)) translateZ(6px);
    }
    div span:first-child {
      --background: var(--back);
    }
    div span:first-child:before {
      --rotate: -45deg;
    }
    div span:first-child:after {
      --rotate: 45deg;
    }
    div span:last-child {
      --rotateY: 180deg;
    }
    div span:last-child:before {
      box-shadow: 0 -5px 0 var(--icon), 0 5px 0 var(--icon);
    }
    div span:last-child:after {
      display: none;
    }
    div span:first-child {
      --rotateY: ${p => !p.active ? '-180deg' : '0deg'};
    }
    div span:last-child {
      --rotateY: ${p => !p.active ? '0' : '180deg'};
    }
    @media(max-width: 1024px) {
      display: flex;
      order: 0;
    }
`

export const RightMenu = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 200px;
    @media(max-width: 1024px) {
      height: 50px;
      background: #000;
      position: fixed;
      bottom: 0;
      padding: 10px 15px;
      max-width: 100%;
      left: 0;
      order: 2;
      justify-content: space-between;
    }
`
export const ContactBox = styled.div`
    flex-direction: column;
    display: flex;
    align-items: flex-end;
    margin-right: 15px;
    width: 100%;
    max-width: 200px;
    a {
      color: ${c.text};
    }
    @media(max-width: 1024px) {
      margin-right: 0;
      order: 1;
      a {
        &:last-child {
          font-size: 12px;
        }
        color: ${c.white};
        font-family: Roboto;
      }
    }
`
export const Phone = styled.a`
    color: ${p => p.active ? c.accent : c.text} !important;
    user-select: auto;
    margin-bottom: 5px;
`
export const SwitchLang = styled.div`
  text-transform: uppercase;
  border-radius: 3px;
  width: 85px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  @media(max-width: 1024px) {
    width: 56px;
  }
`
export const Lang = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    padding: 5px;
    position: relative;
    z-index: 2;
    height: 20px;
    transition: 0.3s ease-out;
    color: ${p => p.active ? c.white : c.text};
    border-radius: 3px;
    @media(max-width: 1024px) {
      font-weight: 100;
      color: ${c.white}
    }
`

export const LogoBox = styled.div`
    z-index: 11;
    cursor: pointer;
    width: 100%;
    max-width: 200px;
    max-height: 40px;
    @media(max-width: 1024px) {
      order: 1;
      display: flex;
      justify-content: center;
      height: 100%;
      width: max-content;
    }
    img {
      height: 100%
    }
`
export const Abs = styled.div`
    position: absolute;
    width: 50%;
    height: 30px;
    z-index: 1;
    transition: 0.3s ease-out;
    left: 0;
    background-color: ${c.accent};
    transform: ${p => `translateX(${p.active ? 0 : 28}px)`};
    @media(max-width: 1024px) {
      //transform: ${p => `translateX(${p.active ? 0 : 25}px)`};
    }
`
