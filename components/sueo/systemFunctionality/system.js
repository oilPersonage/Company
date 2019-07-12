import React from 'react'

import { SystemBox, SloganBox, SloganItem, SloganTitle, SloganExtra, StepsBox, Item, IconBox } from './style'
import {SectionTtitle} from '../../../styled/main.style'

const SystemFunctionality = ({l}) => {
 const {systemFunctionality: {title, slogan, steps}} = l.sueo
  console.log(l.systemFunctionality)

 return <SystemBox>
  <SloganBox>
    {slogan.map((el, index) => <SloganItem key={el.title + index} right={index === 0 || index === 2 }>
      <SloganTitle>{el.title}</SloganTitle>
      <SloganExtra>{el.extra}</SloganExtra>
    </SloganItem>)
    }
  </SloganBox>
  <SectionTtitle style={{paddingTop: 0}}>{title}</SectionTtitle>
  <StepsBox>
    {steps.map((step, index) => <Item key={step.text + index}>
      <IconBox>
        <p>{index + 1}</p>
        <img src={`../../../static/img/sueo/icons/${index + 1}.png`} alt=""/>
      </IconBox>
      <p>{step.text}</p>
    </Item>)
    }
  </StepsBox>
 </SystemBox>
}

export default SystemFunctionality
