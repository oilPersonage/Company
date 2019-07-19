import React from 'react'
import {SectionHead, SectionTitle, DescriptionTitle} from '../../../../styled/main.style'
import { IconBox, Item, ExtensionBox} from './style'

const Extension = ({l}) => {
  const {title, extraTitle, icons} = l
 return <ExtensionBox>
   <SectionHead>
    <SectionTitle dangerouslySetInnerHTML={{__html: title}} />
    <DescriptionTitle>{extraTitle}</DescriptionTitle>
    <IconBox>
      {icons.map((el, index) => <Item key={el}>
        <object data={`../../../../static/img/sail/icons/${index+1}.svg`} type="image/svg+xml"></object>
        {el}
      </Item>)}
    </IconBox>
   </SectionHead>
 </ExtensionBox>
}

export default Extension
