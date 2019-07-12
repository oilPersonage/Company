import styled from 'styled-components'
import Portal from '../portal/header/header'
import Sueo from '../sueo/header/header'

const FixedPosition = styled.div`
  position: fixed;
  top: 0;
  transform: ${p => p.animation ? 'translateX(0)' : 'translateX(100%)'};
  transition: ${p => `transform ${p.animation ? '1s' : 0} ease-out`};
`

const Shadow = ({nextRouter, l, animation}) => {
  console.log(animation)
  const arr = [
    Portal,
    Sueo,
  ]
  const Component = arr[nextRouter]
  return <FixedPosition animation={animation}>
      <Component l={l} index/>
    </FixedPosition>
}

export default Shadow
