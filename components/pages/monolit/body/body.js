import React, {useEffect} from 'react'
import {BodyContainer, Item, RightBox} from './style'
import findPostion from '../../../../utils/findPosition'

const Body = ({l}) => {
  const {items} = l

  const animation = () => {
    items.forEach((it, index) => {
      const element = document.getElementById(it.title + index)
      const visible = findPostion(element, window.innerHeight / 3)
      if (visible) {
        element.classList.add('show')
      }
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', animation)
    return () => window.removeEventListener('scroll', animation)
  })

  return <BodyContainer>
    <div>
      <img src="../../../../static/img/monolit/body.png" alt=""/>
    </div>
    <RightBox>
      {items.map((el, index) => <Item key={el.title + index} id={el.title + index} m={el.m}>
        <h4>{el.title}</h4>
        <p>{el.text}</p>
      </Item>)}
    </RightBox>
  </BodyContainer>
}

export default Body
