import styled from 'styled-components'
import c from '../../../../styled/color'

export const HeaderBox = styled.div`
  margin-top: ${p => p.index ? '50px' : 0};
  margin-right: ${p=> p.index ? '-5px' : 0};
  @media(max-width: 1024px) {
    display: flex;
  }
  @media(max-width: 600px) {
    flex-direction: column;
  }
`
export const ImgBox = styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
  background: url('../../../../static/img/sail/header.jpg') no-repeat 0 100% / cover;
  clip-path: url(#clipSail);
  svg {
    height: 0;
    width: 0;
  }
  h1 {
    color: ${c.white};
  }
  @media(max-width: 1366px) {
    background-position: 60% 0%;
  }
  @media(max-width: 1024px) {
    background-position: 90% 0;
    h1 {
      margin: 0 auto;
    }
    clip-path: none;
  }
`
export const TextBox = styled.div`
  position: absolute;
  margin-bottom: 100px;
  top: 50%;
  transform: translateY(-50%);
  left: 300px;
  max-width: 300px;
  p {
    font-size: 18px;
    span {
      font-size: inherit;
      text-transform: uppercase;
      color: ${c.accent};
      font-weight: bold;
    }
  }
  @media(max-width: 1024px) {
    position: static;
    min-width: 350px;
    padding: 25px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: none;
  }
  @media(max-width: 600px) {
    text-align: center;
    align-items: center;
    justify-content: center;
    min-width: 100%;
  }
`
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`
export const ItemBox = styled.div`
  display: flex;
  margin-bottom: 30px;
  flex-direction: column;
`
export const Title = styled.p`
  margin-bottom: 5px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${c.accent}
`
export const SectionName = styled.h1`
  padding-top: 50px;
  text-transform: uppercase;
  span {
    font-size: inherit;
    font-weight: bold;
    display: block;
    margin-top: 30px;
    color: ${c.accent}
  }
  
  @media(max-width: 600px) {
    padding-top: 15px;
    span {
      margin-top: 15px;
    }
  }
`
