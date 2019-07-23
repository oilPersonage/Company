import styled from 'styled-components'

export const HeaderComponent = styled.div`
  height: 100vh;
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
    height: auto;
    flex-direction: column;
  }
`

export const HeaderImg = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  // background-color: #000;
  width: 100%;
  padding: ${p => !p.p ? '250px 650px 100px 50px' : 0};
  @media(max-width: 1024px) {
    position: static;
    width: calc(100vw - 350px)
  }
  @media(max-width: 600px) {
    width: 100%;
    height: calc(50vh + 50px);
    margin-top: 50px;
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
  @media(max-width: 1366px) {
    background-size: 100%;
  }
  @media(max-width: 1024px) {
    clip-path: none;
    background-size: cover;
    background-position: 40% 100%;
  }
  @media(max-width: 600px) {
    width: 100%;
    height: 100%;
    background-position: 50% 0;
  }
`
