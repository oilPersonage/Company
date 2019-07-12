import React from 'react'

import {Container} from '../styled/main.style'
import Header from '../components/portal/header/header'
import Description from '../components/portal/description/description'
import Properties from '../components/portal/bigScreen/properties'
import SmallScreen from '../components/portal/smallScreen/'
import Specification from '../components/portal/specification/'
import Form from '../components/smallComponents/form'

const Portal = ({l}) => {

  const onSubmit = (body) => {

  }

  return <Container>
    <Header l={l}/>
    <Description l={l} />
    <Properties l={l} />
    <SmallScreen l={l} />
    <Specification l={l} />
    <Form l={l} onSubmit={onSubmit}/>
  </Container>
}

export default Portal
