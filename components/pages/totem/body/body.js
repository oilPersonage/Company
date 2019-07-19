import React from 'react'
import {BodyContainer} from './style'
import {SectionTitle} from '../../../../styled/main.style'
import Params from "../../../smallComponents/params";
import VariationIcons from "../../../smallComponents/variation/variationIcons";

const Body = ({l, left}) => {
  const {title, items} = l
  return <BodyContainer>
    <div>
      <img src="../../../../static/img/totem/1.png" alt=""/>
    </div>
    <div>
      <VariationIcons left={left} />
      <SectionTitle>{title}</SectionTitle>
      <Params arr={items}/>
    </div>
  </BodyContainer>
}

export default Body
