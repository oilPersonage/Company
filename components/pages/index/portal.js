import React, {useState} from 'react'

import {Link, Router} from '../../../routes'
import {ScreenBoxPortal, Box, DescriptionSystem, LinkToSystem} from './style'

const Portal = ({...props}) => {
  const [anim, setAnim] = useState(false)
  const {active, l, change, query} = props

  const pathname = query ? `${query}/portal` : '/portal'

  const setAnimation = (e) => {
    e.preventDefault()
    setAnim(true)
    change(0)
    setTimeout(() => {
      Router.push(({ pathname }))
    }, 1000)
  }

  return <ScreenBoxPortal anim={anim}>
    <Box active={active}>
      <h2>{l.portalTitle}</h2>
      <DescriptionSystem active={active}>
        <p>{l.portalDescr}</p>
      </DescriptionSystem>
      <Link route={`portal/`}>
        <LinkToSystem onClick={setAnimation} href={pathname} active={active}>{l.more}</LinkToSystem>
      </Link>
    </Box>
  </ScreenBoxPortal>
}

export default React.memo(Portal)
