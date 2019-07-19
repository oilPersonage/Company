import styled from 'styled-components'
import c from '../../../../styled/color'

export const ComponentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 25px;
  width: max-content;
  margin-left: 55%;
  margin-bottom: 50px;
  h2 {
    font-size: 24px;
    font-weight: bold;
  }
  @media(max-width: 1024px) {
    margin: 0 auto;
    width: 100vw;
    align-items: center;
  }
  @media(max-width: 600px) {
    padding: 25px 0;
    h2 {
      font-size: 18px;
      text-align: center; 
      padding: 0 15px;
    }
  }
`


export const ContainerHead = styled.div`
  margin-top: ${p => p.index ? '50px' : 0};
  width: 100vw;
  min-height: 100vh;
  background: url('../../../../static/img/sueo/header.png') 30% 100% / 45%, url('../../../../static/img/sueo/display.png') no-repeat 95% 0 / 20%, linear-gradient(to top, ${c.accentl}, ${c.white}) ;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  z-index: 2;
  flex: 1;
  clip-path: url(#clipPathSueoHeader);
  h1 {
    padding: 50px 0;
    span {
      margin-top: 30px;
      display: block;
      font-weight: 800;
      font-size: inherit;
      color: ${c.accent};
    }
  }
  @media(max-width: 1024px) {
    background: none;
    clip-path: none;
    min-height: 100%;
  }
  @media(max-width: 600px) {
    h1 span {
      margin-top: 15px;
      }
    }
    > p {
      padding: 0 15px;
    }
`

export const Title = styled.h1`
//font-size: 24px;
  text-align: center;
  margin-bottom: 0;
  span {
    color: ${c.accent}
  }
  @media(max-width: 1024px) {
    text-transform: uppercase;
  }
`
export const Name = styled.p`
  text-align: center;
`
export const ComponentItem = styled.div`
  display: flex;
  padding: 25px;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  background: ${p => p.accent ? `linear-gradient(to right, ${c.accentl}, transparent)` : `linear-gradient(to right, ${c.white}, transparent)`};
  transition: 0.3s ease-out;
  max-width: 400px;
  a {
    margin-bottom: 5px;
  }
  &:hover {
    transform: ${p => p.hover ? 'translateX(-30px)' : 'none'};
  }
  p {
    font-weight: 100;
  }
  a {
    cursor: pointer;
  }
  @media(max-width: 1366px) {
    max-width: 400px;
    //align-items: center;
  }
  @media(max-width: 1024px) {
    background: ${p => p.accent ? `linear-gradient(to right, transparent, ${c.accentl}, transparent)` : `linear-gradient(to right, ${c.white}, transparent)`};
    max-width: 100%;
    width: 100vw;
    text-align: center;
    a p {
      text-transform: uppercase;
      font-weight: normal;
    }
  }
  
  @media(max-width: 600px) {
    padding: 15px;
    background: ${p => p.accent ? `linear-gradient(to right, ${c.accentl}, ${c.accentl})`: `linear-gradient(to right, ${c.white}, transparent)`};  
    a p {
      font-size: 16px;
      text-transform: uppercase;
      font-weight: normal;
    }
  }
`
export const TitleBox = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
  color: ${c.accent};
  font-weight: normal;
`
export const PsevdoTitle = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
  color: ${c.accent};
  font-weight: normal !important;
`
export const ExtraTitle = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 800px;
  font-weight: 100;
  margin: 0 auto 50px;
  @media(max-width:600px) {
    font-size: 16px;
  }
`
