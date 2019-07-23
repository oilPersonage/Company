import styled from 'styled-components'
import c from '../../../../styled/color'

export const BodyContainer = styled.div`
  display: flex;
  margin-top: 100px;
  > div {
    width: 50%;
    position: relative;
  }
  
  @media(max-width: 1024px) {
    > div {
      h2 {
        font-size: 20px;
        justify-content: center;  
      }
      &:last-child {
        margin-bottom: 100px;
      }
    }
  }
  @media(max-width: 600px) {
    flex-direction: column;
    padding: 0 15px;
    > div {
      &:first-child {
        order: 1;
      }
      &:last-child {
        order: 0;
        margin-bottom: 0;
      }
    }
    > div {
      width: 100%;
      h2 {
        justify-content: center;
      }
    }
  }
`
export const ImgAbs = styled.img`
  position: absolute;
  top: 100px;
  width: 60% !important;
  @media(max-width: 1024px) {
    top: 130px;
  }
  @media(max-width: 600px) {
    top: 120px;
  }
`
export const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 150px;
  img {
    width: 50%;
  }
  @media(max-width: 1024px) {
    align-items: flex-start;
  }
`
export const HeadBox = styled.div`
  display: flex;
  margin-top: 100px;
  height: 300px;
  align-items: center;
  position: relative;
  p {
    font-size: 24px;
    font-weight: bold;
    color: ${c.accent};
    position: absolute;
    top: 50%;
    left: 50px;
    transform: translateY(-50%);
  }
  div {
    max-width: 400px;
    font-size: 24px;
    font-weight: bold;
    margin-left: 150px;
    span {
      color: ${c.accent};
      text-transform: uppercase;
      font-weight: bold;
      font-size: inherit;
      line-height: 1.5;
    }
  }
  @media(max-width: 600px) {
    height: auto;
    margin-top: 0;
    p, input {
      display: none;
    }
    div {
      max-width: 100%;
      margin-left: 0;
    }
  }
`
export const Input = styled.input`
  position: absolute;
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 200px; /* Specific width is required for Firefox. */
  transform: rotate(90deg) translateY(100px);
  /* Otherwise white in Chrome */
  border-radius: 3px;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border-radius: 50%;
    background: ${c.accent};
    cursor: pointer;
    margin-top: -10px;
    height: 30px;
    width: 30px;
  }
  &:focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  }
  &::-webkit-slider-runnable-track  {
   background: #fafafa;
   height: 10px;
   box-shadow: inset 0 0px 5px rgba(0,0,0,.1);
   border-radius: 3px;
}
  &::-ms-track {
    background: #F1F1F1;
    width: 100%;
    cursor: pointer;
  
    /* Hides the slider so custom styles can be added */
    border-color: transparent;
    color: transparent;
  }
`
export const Title = styled.h2`
  margin-top: 50px;
  display: flex;
`
