import React from 'react'
import Header from '../components/pages/monolit/header/header'
import SystemFunctionality from '../components/smallComponents/systemFunctionality/system'
import Body from '../components/pages/monolit/body/body'
import Form from "../components/smallComponents/form";


const Monolit = ({l}) => {
  const {header, systemFunctionality, body} = l.monolit
  const data = {
    steps: systemFunctionality.items,
    title: systemFunctionality.title,
  }
  return <div>
    <Header l={header} variationText={l.variationText}/>
    <SystemFunctionality l={data} />
    <Body l={body}/>
    <Form l={l}/>
  </div>
}

export default Monolit
