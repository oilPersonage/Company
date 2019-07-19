import React from 'react'

import {Container} from '../styled/main.style'
import Header from '../components/pages/portal/header/header'
import Description from '../components/pages/portal/description/description'
import Properties from '../components/pages/portal/bigScreen/properties'
import SmallScreen from '../components/pages/portal/smallScreen/'
import Specification from '../components/pages/portal/specification/'
import Form from '../components/smallComponents/form'

const Portal = ({l, query, mobile}) => {
  const {portal} = l
  const {bigScreen, smallScreen, specification, description} = portal

  const onSubmit = (body) => {

  }

  return <Container>
    <Header l={l} query={query} portal2 />
    <Description l={description} portal2 />
    <Properties l={bigScreen} portal2 />
    <SmallScreen l={smallScreen} portal2 />
    <Specification l={specification} portal2 />
    <Form l={l} onSubmit={onSubmit}/>
  </Container>
}

export default Portal
