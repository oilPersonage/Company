import React from 'react'
import Header from '../components/pages/gendarme/header/header'
import Body from '../components/pages/gendarme/body/body'
import Form from '../components/smallComponents/form'

import {Container} from '../styled/main.style'

const Gendarme = ({l}) => {
  const { body} = l.gendarme
 return <Container>
   <Header l={l}/>
   <Body l={body}/>
   <Form l={l}/>
 </Container>
}

export default Gendarme
