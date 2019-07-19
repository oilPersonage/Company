import React from 'react'
import {Title, Name, HeaderBox} from './style'
import VariationIcons from "../../../smallComponents/variation/variationIcons";

const Header = ({l}) => {
  const {title, extraTitle, name, bottomText} = l.gendarme.header
  const {left} = l.variationText
 return <HeaderBox>
   <Title>{name}</Title>
   <div>
     <Name dangerouslySetInnerHTML={{ __html: title}} />
     <p>{extraTitle}</p>
     <VariationIcons white left={left}/>
     <p>{bottomText}</p>
   </div>
 </HeaderBox>
}

export default Header
