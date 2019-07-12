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
`
export const NavBox = styled.div`
  display: flex;
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
`

export const RightMenu = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 200px;
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
`

export const LogoBox = styled.div`
    cursor: pointer;
    width: 100%;
    max-width: 200px;
    max-height: 40px;
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
`
