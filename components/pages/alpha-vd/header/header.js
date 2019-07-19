import React from 'react'
import {PageTitle, SectionHead} from "../../../../styled/main.style";
import {HeaderBox} from './style'

const Header = ({l}) => {
  const {title, name} = l
 return <HeaderBox>
   <SectionHead>
     <PageTitle>{title}<span>{name}</span></PageTitle>
   </SectionHead>
 </HeaderBox>
}

export default Header
