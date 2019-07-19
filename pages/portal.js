import React from 'react'

import {Container} from '../styled/main.style'
import Header from '../components/pages/portal/header/header'
import Description from '../components/pages/portal/description/description'
import Properties from '../components/pages/portal/bigScreen/properties'
import SmallScreen from '../components/pages/portal/smallScreen/'
import Specification from '../components/pages/portal/specification/'
import Form from '../components/smallComponents/form'
import Home from "./index";

const Portal2 = ({l, query, mobile}) => {
  const {portal} = l
  const {bigScreen, smallScreen, specification, description} = portal

  const onSubmit = (body) => {

  }

  return <Container>
    <Header l={l} query={query}/>
    <Description l={description} />
    <Properties l={bigScreen}/>
    <SmallScreen l={smallScreen} />
    <Specification l={specification}/>
    <Form l={l} onSubmit={onSubmit}/>
  </Container>
}

Home.getInitialProps = ({ query }) => {
  return query
}

export default Portal2
