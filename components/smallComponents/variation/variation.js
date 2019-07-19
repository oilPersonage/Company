import React from 'react'
import {VariationBox, TextBox, Item, VariationContainer, VariationIconsBox} from './style'
import {SectionTitle, SectionHead} from '../../../styled/main.style'
import Carousel from './carousel/carousel'

import VariationIcons from './variationIcons'

const Variation = ({title, images, variationText}) => {
  const {left, right} = variationText
 return <VariationBox>
   <SectionHead>
    <SectionTitle dangerouslySetInnerHTML={{ __html: title }} />
   </SectionHead>
   <VariationContainer>
     <VariationIconsBox>
      <VariationIcons left={left} />
     </VariationIconsBox>
     <Carousel images={images || []} />
     <TextBox>
       {right.map((text) => <Item key={text}>
         <p dangerouslySetInnerHTML={{__html:  text}} />
       </Item>)
       }
      </TextBox>
   </VariationContainer>
 </VariationBox>
}

export default Variation
