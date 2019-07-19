import React, {useEffect} from 'react'

import {SystemBox, SloganBox, SloganItem, SloganTitle, SloganExtra, StepsBox, Item, IconBox} from './style'
import {SectionTitle, SectionHead} from '../../../styled/main.style'

import findPostion from '../../../utils/findPosition'

const SystemFunctionality = ({l}) => {
  const {title, slogan, steps} = l

  const animation = () => {
    const el = document.getElementById('SystemBox')
    const visible = findPostion(el, window.innerHeight / 2)
    if (visible) {
      steps.forEach((item, index) => {
        const div = document.getElementById(item + index)
        div.style.opacity = 1;
        div.style.transform = 'translateY(0)';
        div.style.transitionDelay = `0.${index *1}s`;
      })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', animation)
    return () => window.removeEventListener('scroll', animation)
  })

  return <SystemBox id="SystemBox" slogan={slogan}>
    {slogan &&
      <SloganBox>
        {slogan.map((el, index) => <SloganItem key={el.title + index} right={index === 0 || index === 2}>
          <SloganTitle>{el.title}</SloganTitle>
          <SloganExtra>{el.extra}</SloganExtra>
        </SloganItem>)
        }
      </SloganBox>
    }
    <SectionHead>
      <SectionTitle style={{paddingTop: slogan ? 0 : '100px'}}>{title}</SectionTitle>
    </SectionHead>
    <StepsBox>
      {steps.map((step, index) => <Item id={step + index}  key={step}>
        <IconBox>
          <p>{index + 1}</p>
          <img src={`../../../../static/img/sueo/icons/${index + 1}.png`} alt=""/>
        </IconBox>
        <p>{step}</p>
      </Item>)
      }
    </StepsBox>
  </SystemBox>
}

export default SystemFunctionality
