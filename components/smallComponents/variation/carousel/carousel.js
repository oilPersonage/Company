import React, {useState} from 'react'

import {CarouselBox, CarouselWrapper, ImgBox, NavigationBox, NavigationItem} from '../style'

const Carousel = ({images}) => {
  const [current, setCurrent] = useState(0)
 return <CarouselBox>
   <CarouselWrapper style={{transform: `translateX(-${current * 100 / images.length}%)` }}>
     {images.map((img, index) => <ImgBox active={index === current} key={index}>{img}</ImgBox>)}
   </CarouselWrapper>
   {images.length > 1 &&
   <NavigationBox>
     {images.map((img, index) => <NavigationItem active={index === current} onClick={() => setCurrent(index)}
                                                 key={index}>{img}</NavigationItem>)}
   </NavigationBox>
   }
 </CarouselBox>
}

export default Carousel
