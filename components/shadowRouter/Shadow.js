import styled from 'styled-components'
import Portal from '../pages/portal/header/header'
import Sueo from '../pages/sueo/header/header'
import Sail from '../pages/sail/header/header'

const FixedPosition = styled.div`
  position: fixed;
  top: 0;
  transform: ${p => p.animation ? 'translateX(0)' : 'translateX(100vw)'};
  transition: ${p => `transform ${p.animation ? '1s' : 0}  cubic-bezier(.1,.3,.33,.99)`};
`

const Shadow = ({nextRouter, l, animation, mobile}) => {
  const arr = [
    Portal,
    Sueo,
    Sail,
  ]
  const Component = arr[nextRouter]
  return <FixedPosition animation={animation}>
      <Component mobile={mobile} l={l} index/>
    </FixedPosition>
}

export default Shadow
