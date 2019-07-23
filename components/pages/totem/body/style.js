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
  @media(max-width: 1024px) {
    padding: 0 15px;
    flex-wrap: wrap;
    margin-bottom: 30px;
    > div:first-child {
      margin: 0 auto;
      order: 1;
    }
    > div {
      width: 100%;
      order: 0;
      margin: 0 auto 50px;
      &:last-child {
        > div {
          &:first-child {
            margin: 0 auto;
            width: 50%;
          }
        }
      }
    }
    @media(max-width: 600px) {
      > div {
        width: 100% !important;
        &:last-child {
          > div {
            &:first-child {
              width: 100%;
            }
          }
        }
      }
    }
  }
`
