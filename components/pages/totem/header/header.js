import React from 'react'

import {SectionHead, DescriptionTitle} from "../../../../styled/main.style";
import {Header, Title} from './style'


const HeaderComponent = ({l}) => {
  const {title, extraTitle, name, text} = l
  return <Header>
    <SectionHead>
      <Title dangerouslySetInnerHTML={{__html: title}} />
      <h2>{name}</h2>
      <DescriptionTitle>{extraTitle}</DescriptionTitle>
    </SectionHead>
  </Header>
}

export default HeaderComponent
