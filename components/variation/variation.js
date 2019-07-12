import React from 'react'
import {VariationBox, TextBox, IconBox, Item, VariationContainer} from './style'
import {SectionTtitle} from '../../styled/main.style'
import Carousel from './carousel/carousel'

const Variation = ({title, images, variationText}) => {
  const {left, right} = variationText
 return <VariationBox>
   <SectionTtitle>{title} </SectionTtitle>
   <VariationContainer>
     <TextBox left>
       {left.map((text, index) => <Item key={text + index}>
         <p>{text}</p>
         <IconBox>
           <img src="" alt=""/>
         </IconBox>
       </Item>)
       }
     </TextBox>
     <Carousel images={images} />
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
