import React from 'react'
import { SkkrContainer, SkkrBox, ExtraTitle, Item } from './style'
import { SectionTitle } from '../../../../styled/main.style'

const Skkr = ({l}) => {
  const {title, extraTitle, extraText, items, rimTitle, rimDescr } = l
 return <SkkrContainer id="skkr">
    <svg version="1.1" x="0px" y="0px" viewBox="0 0 1920 977">
      <clipPath id="clipPathSok">
        <path className="st0" d="M942,0.1c334.4-3.2,791.3,86.3,978,131.5V977H0V131.5C176.3,89,607.6,3.3,942,0.1z"/>
      </clipPath>
    </svg>
   <SectionTitle dangerouslySetInnerHTML={{__html: title}} />
   <p>{extraTitle}</p>
   <ExtraTitle>{extraText}</ExtraTitle>
   <SkkrBox>
     {items.map(el => <Item key={el}>{el}</Item>)}
   </SkkrBox>
   <SectionTitle margin='0 0 30px 0' dangerouslySetInnerHTML={{__html: rimTitle}}  />
   <p>{rimDescr}</p>
 </SkkrContainer>
}

export default Skkr
