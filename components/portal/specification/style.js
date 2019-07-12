import styled from 'styled-components'
import c from '../../../styled/color'

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
`
export const PropertiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > div {
    transform: none;
    width: 70% !important;
  }
`
export const SpecififcationImg = styled.div`
  max-width: 30%;
`
