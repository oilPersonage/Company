import styled from 'styled-components'
import c from '../../../../styled/color'

export const Body = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`
export const Item = styled.div`
  max-width: 170px;
  margin: 7.5px;
  box-shadow: 0 1px 4px rgba(0,0,0,.1), 0 5px 10px rgba(0,0,0,.1);
  position: relative;
  overflow: hidden; 
  border-radius: 3px;
  &:after {
    position: absolute;
    content: '';
    background: ${c.accent};
    height: 200px;
    transition: 0.3s ease-out;
    width: 200px;
    border-radius: 50%;
    top: -30%;
    left: -30%;
  }
  &:hover {
    p {
      color: ${c.white};
      position: relative; 
      z-index: 2;
    }
    &:after {
      top: 40% !important;
      left: -10% !important;
    }
  }
  p {
    transition: 0.3s ease-out;
    padding: 25px;
  }
  &:nth-child(2) {
    &:after {
      top: -35%;
      left: -25%;
    }
  }
  &:nth-child(3) {
    &:after {
      top: -40%;
      left: -15%;
    }
  }
  &:nth-child(4) {
    &:after {
      top: -45%;
      left: -10%;
    }
  }
  &:nth-child(5) {
    &:after {
      top: -40%;
      left: auto;
      right: -25px;
    }
  }
  &:nth-child(6) {
    &:hover {
      &:after {
        top: 40% !important;
        left: auto;
        right: -10% !important;
      }
    }
    &:after {
      top: -35% !important;
      left: auto !important;
      right: -25% !important;
    }
  }
  &:nth-child(7) {
    &:hover {
      &:after {
        left: auto !important;
        top: 40% !important;
        right: -10% !important;
      }
    }
    &:after {
      top: -35%;
      left: auto;
      right: -30%;
    }
  }
`
export const Number = styled.div`
  position: relative;
  z-index: 2;
  font-size: 72px;
  color: ${c.white};
  margin-bottom: 30px;
  padding-top: 25px;
  font-weight: bold;
  padding-left: 35px;
`
