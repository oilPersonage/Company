import React, {useState} from 'react'

import {Link, Router} from '../../routes'
import {ScreenBoxPortal, Box, DescriptionSystem, LinkToSystem} from './style'

const Portal = ({...props}) => {
  const [anim, setAnim] = useState(false)
  const {active, l, change, query} = props
  const setAnimation = (e) => {
    e.preventDefault()
    setAnim(true)
    change(0)
    setTimeout(() => {
      Router.push(({ pathname: query ? `/${query}/portal` : '/portal'}))
    }, 1000)
  }

  return <ScreenBoxPortal anim={anim}>
    <Box active={active}>
      <h2>{l.portalTitle}</h2>
      <DescriptionSystem active={active}>
        <p>{l.portalDescr}</p>
      </DescriptionSystem>
      <Link route={`portal/`}>
        <LinkToSystem onClick={setAnimation} active={active}>{l.more}</LinkToSystem>
      </Link>
    </Box>
  </ScreenBoxPortal>
}

export default React.memo(Portal)
