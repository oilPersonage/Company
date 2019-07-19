import styled from 'styled-components'

export const SpecificationBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: url("../../../../static/img/alpha-mat/specifications.png") no-repeat 50% 100%;
  background-size: 105%;
  padding: 0 0 400px;
  position: relative; 
  &:after {
    position: absolute;
    bottom: 0;
    height: 300px;
    width: 100vw;
    content: '';
    background: linear-gradient(to top, #fff 20%, transparent);
  }
`
export const Body = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
  transform: scale(0.8);
`
