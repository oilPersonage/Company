import styled from 'styled-components'

export const HeaderComponent = styled.div`
  min-height: 100vh;
  margin-top: -50px;
  width: 100vw;
  position: relative;
  > svg {
    height: 0;
    width: 0;
  }
`

export const Img = styled.img`
  background: url("../../../../static/img/monolit/header.jpg") no-repeat -300px 0%;
  background-size: 90%;
  transition: 1s ease-out;
  width: 100%;
  clip-path: url(#myClip);
  height: 100vh;
  object-fit: contain;
`
