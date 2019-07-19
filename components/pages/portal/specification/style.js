import styled from 'styled-components'
import c from '../../../../styled/color'

export const SpecificationBox = styled.div`
  display: flex;
  align-items: center;
  padding-top: 150px;
  position: relative;
  z-index: 10;
  background: ${c.white};
  > div {
    flex: 1;
  }
  @media(max-width: 1024px) {
    padding-top: 30px;
    margin-bottom: 100px;
  }
`
export const PropertiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > div {
    transform: none;
    width: 70%;
  }
  @media(max-width: 1024px) {
    position: relative;
    z-index: 2;
  }
`
export const SpecififcationImg = styled.div`
  max-width: 30%;
  display: flex;
  justify-content: center;
  @media(max-width: 1024px) {
    position: absolute;
    height: 90%;
    top: 100px;
    opacity: 0.05;
    min-width: 80vw;
    margin: 0 auto;
    left: 0;
    z-index: 1;
    img {
      height: 100%;
    }
  }
`
