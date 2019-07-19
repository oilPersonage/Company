import React from 'react'
import Header from '../components/pages/alpha-mat/header/header'
import Quest from '../components/pages/alpha-mat/quest/quest'
import Specifications from '../components/pages/alpha-mat/specifications/specifications'
import Form from "../components/smallComponents/form";

const AlphaMat = ({l}) => {
  const {quest, specifications} = l.alphamat
  return <div>
    <Header l={l.alphamat}/>
    <Quest l={quest} left={l.variationText.left}/>
    <Specifications l={specifications} />
    <Form l={l}/>
  </div>
}

export default AlphaMat
