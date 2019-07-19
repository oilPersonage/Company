import React from 'react'
import {SectionHead, SectionTitle, DescriptionTitle} from "../../../../styled/main.style";
import {Item, Body} from './style'

const GettingPass = ({l}) => {
  const {title, extraTitle, left, right} = l
  return <div>
    <SectionHead>
      <SectionTitle>{title}</SectionTitle>
      <DescriptionTitle>{extraTitle}</DescriptionTitle>
    </SectionHead>
    <Body>
      <svg version="1.1" id="Слой_1" x="0px" y="0px" viewBox="0 0 1915 700">
        <clipPath id='clipPass'>
          <path className="st0" d="M0.5,699.5v-600c0,0,411-101,957-100s957,95,957,95v605H0.5z"/>
        </clipPath>
      </svg>

      <div>
        {left.map(el => <Item left key={el}>{el}</Item>)}
      </div>
      <div>
        {right.map(text => <Item key={text}>{text}</Item>)}
      </div>
    </Body>
  </div>
}

export default GettingPass
