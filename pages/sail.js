import React from 'react'

import Header from '../components/pages/sail/header/header'

import {Container} from '../styled/main.style'
import Advantage from "../components/pages/sail/advantages/advantages";
import GettingPass from "../components/pages/sail/gettingPass/gettingPass";
import Extension from "../components/pages/sail/extension/extension";
import Variation from '../components/smallComponents/variation/variation'
import Form from '../components/smallComponents/form'

const Sail = ({l}) => {
  const {header, params, gettingPass, extension, variation} = l.sail
  return <Container>
    <Header l={l}/>
    <Advantage l={params}/>
    <GettingPass l={gettingPass}/>
    <Extension l={extension}/>
    <Variation variationText={l.variationText} images={[<img src='../static/img/sail/select.png'/>]} title={variation}/>
    <Form l={l} />
  </Container>
}

export default Sail
