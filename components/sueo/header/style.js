import styled from 'styled-components'
import c from '../../../styled/color'

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
`


export const ContainerHead = styled.div`
  margin-top: ${p => p.index ? '50px' : 0};
  width: 100vw;
  min-height: ${p => p.index ? '100vh' : 'calc(100vh - 50px)'};;
  background: url('../static/img/sueo/header.png') 30% 100% / 45%, url('../static/img/sueo/display.png') no-repeat 95% 0 / 20%, linear-gradient(to top, ${c.accentl}, ${c.white}) ;
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
`

export const Title = styled.h1`
//font-size: 24px;
  text-align: center;
  margin-bottom: 0;
  span {
    color: ${c.accent}
  }
`
export const Name = styled.p`
  text-align: center;
`
export const ComponentItem = styled.div`
  display: flex;
  padding: 15px 25px;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  background: ${p => p.accent ? `linear-gradient(to right, ${c.accentl}, transparent)` : `linear-gradient(to right, ${c.white}, transparent)`};
  transition: 0.3s ease-out;
  &:hover {
    transform: ${p => p.hover ? 'translateX(-30px)' : 'none'};
  }
  p {
    font-weight: 100;
  }
  a {
    cursor: pointer;
  }
`
export const TitleBox = styled.a`
  font-size: 18px;
  margin-bottom: 10px;
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
`
