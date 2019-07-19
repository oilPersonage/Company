import React, {useState} from 'react'
import {BodyContainer, ImgAbs, HeadBox, Title, ImgBox, Input} from './style'
import Params from '../../../smallComponents/params'

const Body = ({l}) => {
  const [rotate, setRotate] = useState(0)

  const {headText, title, items} = l

  const transform = {
    transform: `translateX(-2px) rotate(${rotate}deg)`
  }

  return <BodyContainer>
    <ImgBox>
      <ImgAbs style={transform} src="../../../static/img/gendarme/monitor.png" alt=""/>
      <img src="../../../static/img/gendarme/rack.png" alt=""/>
    </ImgBox>
    <div>
      <HeadBox>
        <p>{`${rotate}°`}</p>
        <Input type="range" onChange={(e) => setRotate(e.target.value)} value={rotate} id="start" name="volume"
               min="-90" max="90" />
        <div dangerouslySetInnerHTML={{__html: headText}} />
      </HeadBox>
      <Title>{title}</Title>
      <Params arr={items}/>
    </div>
  </BodyContainer>
}

export default Body
