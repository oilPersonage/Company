import React from 'react'
import {ItemIcon, Advantage, Icon} from '../../../styled/main.style'

const VariationIcons = ({left, white}) => {
 return <Advantage>
   {
     left.map((text, index) => <ItemIcon white={white} index={index} key={text.icon}>
     <Icon>
       <img src={`../../../static/img/icons/${text.icon}.svg`} alt=""/>
     </Icon>
     <p>{text.title}</p>
   </ItemIcon>)
   }
   </Advantage>
}

export default VariationIcons
