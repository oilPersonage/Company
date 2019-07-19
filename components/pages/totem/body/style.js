import styled from 'styled-components'

export const BodyContainer = styled.div`
  display: flex;
  h2 {
    font-size: 24px;
    width: 100%;
  }
  > div {
    margin-right: 200px;
    margin-top: 100px;
    &:first-child {
      margin-top: 0;
      margin-left: 200px;
      width: 60%;
      margin-right: 200px;
    }
    width: 40%;
    > img {
      width: 100%;
    }
  }
`
