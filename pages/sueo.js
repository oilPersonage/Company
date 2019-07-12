import React from 'react'

import Header from '../components/sueo/header/header'
import SystemFunctionality from '../components/sueo/systemFunctionality/system'
import Variation from '../components/sueo/variation/variation'

import {SueoContainer} from '../styled/main.style'

const SUEO = ({l}) => {
  return <SueoContainer>
    <Header l={l} />
    <SystemFunctionality l={l} />
    <Variation title={l.sueo.variation.title} variationText={l.variationText} />
  </SueoContainer>
}

export default SUEO
