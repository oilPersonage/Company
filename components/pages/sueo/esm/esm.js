import React from 'react'
import { SectionTitle, DescriptionTitle } from '../../../../styled/main.style'
import {EsmBox, Box, Body, Right, Title} from './style'

const Esm = ({l}) => {
  const {title, extraTitle, body, laptop} = l
 return <EsmBox id="esm">
   <SectionTitle dangerouslySetInnerHTML={{__html: title}} />
   <DescriptionTitle>{extraTitle}</DescriptionTitle>
   <Body>
      <img src="../../../../static/img/sueo/map.png" alt=""/>
      <Right>
        {body.map((el, index) => <Box key={index}>
          <Title>{el.head}</Title>
          {el.items.map(item => <p key={item}>{item}</p>)}
          </Box>)}
      </Right>
   </Body>
   <Body noPadding>
    <div>
      <h3>{laptop.title}</h3>
      <p>{laptop.text}</p>
    </div>
    <img src="../../../../static/img/sueo/laptop.png" alt=""/>
   </Body>
 </EsmBox>
}

export default Esm
