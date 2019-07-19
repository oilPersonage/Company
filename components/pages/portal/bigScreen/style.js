import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 200px;
  @media(max-width: 1024px) {
    margin-bottom: 15px;
  }
`

export const PropertiesHead = styled.div`
  width: 650px;
  margin-left: 30%;
  h2 {
    text-align: center;
    //opacity: 0
  }
  > p {
    text-align: center;
    max-width: 700px;
    //opacity: 0;
    margin-bottom: 100px;
    padding: 0 30px;
    line-height: 1.4;
  }
  @media(max-width: 1366px) {
    margin: 0 auto;
  }
`

