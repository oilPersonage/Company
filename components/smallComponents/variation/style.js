import styled from 'styled-components'
import c from '../../../styled/color'

export const VariationBox = styled.div`
  display: flex;
  flex-direction: column;
`
export const VariationContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    height: 300px;
    background: ${c.accentl};
    transform: translateY(-100px);
    width: 100%;
  }
  @media(max-width: 1024px) {
    flex-wrap: wrap;
    &:after {
      display: none;
    }
  }
`
export const TextBox = styled.div`
  z-index: 2;
  position: relative;
  display: flex;
  transform: translateY(-100px);
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  margin: ${p => p.left ? '0 0 0 50px' : '0 50px 0 0'};
  > div {
    text-align: ${p => p.left ? 'right' : 'left'};
    p {
      font-size: 18px;
      width: 100%;
    }
  }
  @media(max-width: 1366px) {
    max-width: 300px;
  }
  @media(max-width: 1024px) {
    max-width: 50%;
    margin: 30px;
    transform: none;
    order: 1;
  }
  @media(max-width: 600px) {
    max-width: 100%;
    padding: 0 15px;
    margin: 0;
    align-items: center;
    margin-bottom: 30px;
    div p {
      text-align: center;
      font-size: 14px;
    }   
  }
`
export const NavigationBox = styled.div`
  display: flex;
  max-width: 400px;
  margin: 30px auto 0;
  overflow: hidden;
  flex: 1;
`
export const NavigationItem = styled.div`
  margin: 0 15px;
  padding: 15px;
  border-radius: 3px;
  border: ${p => p.active ? `1px solid ${c.accent}` : '1px solid #e6e6e6'};
  display: flex;
  max-width: 100%;
  height: 90px;
  flex: 1;
  transition: 0.1s ease-out;
  cursor: pointer;
  &:hover {
    border: 1px solid ${c.accent}
  }
  img {
    position: relative;
    top: 5px;
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`
export const  IconBox = styled.div`
  
`
export const  VariationIconsBox = styled.div`
  transform: translateY(-120px);
  margin-left: 50px;
  max-width: 400px;
  p {
    font-size: 18px;
  }
  width: 100%;
  z-index: 2;
  
  @media(max-width: 1366px) {
    max-width: 300px;
  }
  @media(max-width: 1024px) {
    transform: none;
    margin-left: 30px;
    order: 2;
  }
  @media(max-width: 600px) {
    max-width: 100%;
    margin: 0 15px 30px;
  }
`
export const CarouselBox = styled.div`
  display: flex;
  max-width: 1000px;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 50px;
  overflow: hidden;
  flex: 1;
  @media(max-width: 1366px) {
    max-width: 866px;
  }
  @media(max-width: 1024px) {
    max-width: 100vw;
    min-width: 100vw;
    order: 0;
  }
`
export const  CarouselWrapper = styled.div`
  position: relative;
  transition: 0.5s ease-in-out;
  width: max-content;
  min-width: 300%;
  z-index: 2;
`


export const  ImgBox = styled.div`
  display: inline-flex;
  align-items: center;
  transition: 0.5s ease-out;
  opacity: ${p => p.active ? 1 : 0};
  justify-content: center;
  height: 600px;
  width: 1000px;
  padding: 0 100px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  @media(max-width: 1366px) {
    width: 666px;
    height: auto;
  }
  @media(max-width: 1024px) {
     width: 100vw;
     margin: 0 auto;
  }
  @media(max-width: 600px) {
    padding: 0 15px;
  }
`
export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  text-transform: uppercase;
  font-size: 18px;
  span {
    font-size: inherit;
    font-weight: bold;
    color: ${c.accent};
  }
`
