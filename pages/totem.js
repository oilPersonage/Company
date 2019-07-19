import React from 'react'
import Header from '../components/pages/totem/header/header'
import Body from '../components/pages/totem/body/body'
import Form from '../components/smallComponents/form'


const Totem = ({l}) => {
  const {header, body} = l.totem
  return <div>
    <Header l={header}/>
    <Body l={body} left={l.variationText.left} />
    <Form l={l} />
  </div>
}

export default Totem
