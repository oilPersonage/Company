import styled, {keyframes} from 'styled-components'

export const Container = styled.div`
    position: relative;
    display: block;
    > p {
      max-width: 900px;
      font-size: 18px;
      text-align: center;
      line-height: 1.4;
      margin: 0 auto;
    }
    @media(max-width: 600px) {
      font-size: 14px;
    }
`
export const DescriptionBox = styled.div`
    margin-top: 70px;
    margin-bottom: 200px;
    display: flex;
    align-items: center;
    position: relative;
    @media(max-width: 1024px) {    
     margin-bottom: 15px;
    }
  `

export const Img = styled.div`
    position: absolute;
    background: ${p => p.portal2 ? `url('../../../static/img/asvk/12.png')` : `url('../../../static/img/asvk/1.png')`};
    background-size: cover ;
    z-index: 2;
    transition: 0.05s ease;
    top: 0;
    left: 78px;
    width: 265px;
    height: 70vh;
    @media(max-width: 1024px) {
      display: none;
    }
`

const Animantion = keyframes`
 0% {
  opacity: 0;
  transform: translateX(-100%);
 } 
 100% {
  opacity: 1;
  transform: translateX(0%);
  }
`

export const HideDescription = styled.div`
    overflow: hidden;
    margin-right: 100px;
    margin-left: 300px;
    @media(max-width: 1024px) {
      margin: 0;    
      width: 100%;
    }
  `
export const GridBox = styled.div`
    display: grid;
    grid-gap: 5px;
    transform: translateX(-100%);
    animation: ${Animantion} 0.5s ease-out 0.5s forwards;
    margin-top: 100px;
    grid-template-rows: 200px 200px;
    grid-template-columns: ${p => !p.portal2 ? '1fr 1fr 1fr 2fr 3fr 2fr' : '1fr 1fr 1fr 2fr 1.5fr 1.5fr 2fr'};
    grid-template-areas: ${p => !p.portal2 ? `"one one one two three four"  "five six seven two three eight"` : `"one one one two three three four"  "five six seven two eight nine ten"`};
    @media(max-width: 1024px) {
      margin-top: 0px;
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  `
export const Text = styled.p`
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 20px 15px;
    transition: 0.3s ease-out;
    opacity: 0;
    background-color: rgba(0, 0, 0, 1);
    @media(max-width: 1024px) {
      padding: 0 100px;
    }
    @media(max-width: 600px) {
      padding: 0;
    }
  `
export const Title = styled.div`
    text-align: center;
    max-width: 200px;
    padding: 10px 15px;
    transition: 0.3s ease-out;
    font-family: Roboto;
    line-height: 1.4;
    text-transform: uppercase;
    @media(max-width: 1024px) {
      max-width: 100%;
    }
  `
export const Item = styled.div`
    display: flex;
    align-items: center;
    background: ${p => p.fill};
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: 15px 30px;
    transition: 0.15s ease-out;
    grid-area: ${p => p.name};
    &:hover {
      ${Title} {
        opacity: 0;
      }
      ${Text} {
        opacity: 1;
        color: #fff;
      }
    }
    @media(max-width: 600px) {
      min-height: 100px;
    }
  `
