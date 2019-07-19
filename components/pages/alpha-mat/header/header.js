import React from 'react'
import {HeaderBox} from './style'

import {SectionHead, PageTitle, DescriptionTitle} from '../../../../styled/main.style'

const Header = ({l}) => {
  const {title, extraTitle, name} = l
  return <HeaderBox>
    <SectionHead>
      <PageTitle>{title}<span>{name}</span></PageTitle>
      {/*<SectionName>{name}</SectionName>*/}
    </SectionHead>
    <DescriptionTitle>{extraTitle}</DescriptionTitle>

  </HeaderBox>
}

export default Header
