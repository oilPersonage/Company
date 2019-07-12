import React, {useState} from 'react'

import {CarouselBox, CarouselWrapper, ImgBox, NavigationBox, NavigationItem} from '../style'

const Carousel = ({images}) => {
  const [current, setCurrent] = useState(0)
 return <CarouselBox>
   <CarouselWrapper style={{transform: `translateX(-${current * 100 / 3}%)` }}>
     {images.map((img, index) => <ImgBox active={index === current} key={index}>{img}</ImgBox>)}
   </CarouselWrapper>
   <NavigationBox>
     {images.map((img, index) => <NavigationItem active={index===current} onClick={() => setCurrent(index)} key={index}>{img}</NavigationItem>)}
   </NavigationBox>
 </CarouselBox>
}

export default Carousel
