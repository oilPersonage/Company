import styled from 'styled-components'
import c from '../../../styled/color'

export const SystemBox = styled.div`
  position: relative;
  top: -100px;
  padding-top: 100px;
  z-index: 1;
  background: url('../../../static/img/sueo/system.jpg') 100% 100% no-repeat;
`

export const SloganBox = styled.div`
  display: flex;
  max-width: 800px;
  margin: 50px auto;
  flex-wrap: wrap;
`
export const SloganItem = styled.div`
  width: calc(50% - 50px);
  text-align: ${p => p.right ? 'right' : 'left'};
  padding: 25px;
  margin-bottom: 30px;
`
export const SloganTitle = styled.h3`
  margin-bottom: 15px;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 800;
  color: ${c.accent};
`
export const SloganExtra = styled.div`
  line-height: 1.3;
  font-weight: 100;
`
export const StepsBox = styled.div`
  align-items: flex-start;
  justify-content: center;
  display: flex;
`
export const Item = styled.div`
  width: 160px;
  margin: 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  > p {
    text-align: center;
    font-size: 14px;
  }
  &:after {
    position: absolute;
    top: -12px;
    left: 3px;
    content: '';
    width: 50px;
    background-color: rgba(0,0,0,.1);
    border-radius: 50%;
    height: 50px;
    z-index: 1;
  }
  &:hover {
    &:after {
      background-color: ${c.accent};
      transition: 0.1s ease-out;
    }
    img {
      transform: scale(1.1);
    }
  }
`
export const IconBox = styled.div`
  padding: 30px;
  height: 130px;
  width: 130px;
  background: ${c.accent};
  border-radius: 50%;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  p {
    position: absolute;
    top: -7px;
    left: -7px;
    font-size: 24px;
    font-weight: 100;
    z-index: 2;
    background-color: ${c.white};
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    //box-shadow: 0 0 0 5px rgba(0,0,0,.2);
  }
  img {
    height: 80%;
    transition: 1s ease-out;
  }
`
