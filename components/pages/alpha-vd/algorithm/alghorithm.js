import React from 'react'

import {SectionTitle} from '../../../../styled/main.style'
import {Number, Body, Item} from './style'

const Algorithm = ({l}) => {
  const {title, items} = l
 return <div>
   <SectionTitle dangerouslySetInnerHTML={{__html: title}} />
   <Body>
     {
      items.map((el, index) => <Item key={el}>
        <Number>{index +1}</Number>
        <p>{el}</p>
      </Item>)
     }
   </Body>
 </div>
}

export default Algorithm
