import styled from 'styled-components'

export const ExtensionBox = styled.div`
  @media(max-width: 1024px) {
    padding: 0 15px;
  }
`
export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0 50px;
  @media(max-width: 1024px) {
    flex-wrap: wrap;
  }
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px;
  object {
    height: 70px;
    margin-bottom: 30px;
  }
  @media(max-width: 1024px) {
    margin-bottom: 30px;
    min-width: 200px;
  }
`
