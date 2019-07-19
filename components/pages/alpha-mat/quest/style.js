import styled, {keyframes} from 'styled-components'
import c from '../../../../styled/color'

export const QuestBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1600px;
  margin: 0 auto;
`
export const QuestItem = styled.div`
  max-width: 320px;
  margin-bottom: 40px;
  max-height: ${p => p.active ? '61px' : '20px'};
  transition: 0.3s ease-out;
  overflow: hidden;
  p {
    font-size: 16px;
  }
`
export const Title = styled.h4`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s ease-out;
  color: ${p => p.active ? c.accent : c.text};
  &:hover {
    color: ${c.accent};
    svg {
      path {
        fill: ${c.accent}
      }
    }
  }
`
export const Body = styled.p`
  transition: 0.3s ease-out;
  opacity: ${p => p.active ? 1 : 0};
`
export const BodyBox = styled.div`
  //margin-top: 60px;
  display: flex;
`
export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
`

const ArrowAnimation = keyframes`
  0% {
    transform: translateX(0px);
  }
  20% {
    transform: translateX(5px);
  }
  40%, 100% {
    transform: translateX(0px);
  }
`

export const Arrow = styled.svg`
  width: 10px;
  height: 10px;
  opacity: ${p => p.active ? 0 : 1 };
  transition: 0.3s ease-out;
  margin-left: 5px;
  animation: ${ArrowAnimation} 5s ease-out infinite;
  path {
    fill: ${p => p.active ? c.accent : c.text}
  }
`
