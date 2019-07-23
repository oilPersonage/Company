import React, {useState} from 'react'
import {Router} from "../../../routes";
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  transform: ${p => p.anim ? `translateX(-100%)` : 'none'};
  transition: transform 1s cubic-bezier(.1,.3,.33,.99);
`

const AnimationWrapper = ({...props}) => {
  const [anim, setAnim] = useState(false)
  const {query, stopScroll, l, path, active} = props
  const pathname = query ? `/${query}/${path}` : `/${path}`
  const setAnimation = (e) => {
    e.preventDefault()
    setAnim(true)
    stopScroll(true)
    setTimeout(() => {
      Router.push(({ pathname }))
    }, 1000)
  }
  const childrenWithExtraProp = React.Children.map(props.children, child => {
    return React.cloneElement(child, {anim, l, setAnimation, pathname, active});
  });

  return <Wrapper>
    {childrenWithExtraProp}
  </Wrapper>
}

export default React.memo(AnimationWrapper)
