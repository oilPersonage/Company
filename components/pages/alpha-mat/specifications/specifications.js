import React from 'react'
import {SectionTitle, SectionHead} from '../../../../styled/main.style'
import Params from '../../../smallComponents/params'

import {SpecificationBox, Body} from './style'



const Specifications = ({l}) => {
  const {title, items} = l
  return <SpecificationBox>
    <SectionHead>
      <SectionTitle>{title}</SectionTitle>
    </SectionHead>
    <Body>
      <Params arr={items}/>
    </Body>
  </SpecificationBox>
}

export default Specifications
