import styled from 'styled-components'
import c from '../../../../styled/color'

export const SkkrContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url('../../../../static/img/sueo/skkr.jpg') 50% / cover;
  align-items: center;
  padding: 30px 0 80px;
  > p {
    font-weight: 100;
    font-size: 18px;
    max-width: 700px;
    text-align: center;   
  }
  svg {
    height: 0;
    width: 0;
  }
  clip-path: url(#clipPathSok);
  @media(max-width: 1024px) {
    padding: 0 15px 50px;
    clip-path: none;
  }
  @media(max-width: 600px) {
    p {
      font-size: 14px;
    }
  }
`
export const ExtraTitle = styled.h3`
  margin-top: 60px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  @media(max-width: 600px) {
    text-align: center;
    line-height: 1.4;
  }
`
export const SkkrBox = styled.div`
  margin: 30px 0 0;
  display: flex;
  justify-content: center;
  flex-direction: column; 
`
export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  width: 430px;
  margin: 5px 0;
  flex-direction: column; 
  background: ${c.white};
  @media(max-width: 600px) {
    width: calc(100vw - 30px);
  }
`
