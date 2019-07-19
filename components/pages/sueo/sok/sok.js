import React from 'react'
import {Title, Body, SokBox} from './style'
import {SectionTitle, DescriptionTitle, SectionHead} from '../../../../styled/main.style'

const Sok = ({l}) => {
 const {title, extraTitle, text1, text2, text3, extraText} = l
 return <SokBox id="sok">
   <SectionHead>
      <SectionTitle dangerouslySetInnerHTML={{__html: title }} />
      <DescriptionTitle>{extraTitle}</DescriptionTitle>
   </SectionHead>
  <Body>
     <div>
       <Title>{extraText}</Title>
       <p>{text1}</p>
       <p>{text2}</p>
       <p>{text3}</p>
     </div>
     <img src="../../../static/img/sueo/sok.png" alt=""/>
  </Body>
 </SokBox>
}

export default Sok
