import React, {useEffect} from 'react'

import Header from '../components/pages/sueo/header/header'
import SystemFunctionality from '../components/smallComponents/systemFunctionality/system'
import Variation from '../components/pages/sueo/variation/variation'
import Skkr from '../components/pages/sueo/skkr/skkr'
import Sok from '../components/pages/sueo/sok/sok'
import Esm from '../components/pages/sueo/esm/esm'
import Form from '../components/smallComponents/form'

import {SueoContainer} from '../styled/main.style'

const SUEO = ({l, id}) => {
  const {variation, skkr, sok, esm, systemFunctionality} = l.sueo
  useEffect(() => {
    if (!id) return
    const el = document.getElementById(id)
    el.scrollIntoView({block: 'start', behavior: 'smooth'})
  })
  return <SueoContainer>
    <Header l={l} />
    <SystemFunctionality l={systemFunctionality} />
    <Variation title={variation.title} variationText={l.variationText} />
    <Skkr l={skkr} />
    <Sok l={sok} />
    <Esm l={esm} />
    <Form l={l} />
  </SueoContainer>
}

export default SUEO
