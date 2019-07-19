import React, {useEffect} from 'react'

import { ContactItem, TextBox } from './style'
import findPosition from '../../../utils/findPosition'

const Team = ({items}) => {
  const teamEnable = {}
  items.forEach((it) => teamEnable[it.name] = false)

  const animation = () => {
    items.forEach((el, index) => {
      const element = document.getElementById(index)
      const visible = findPosition(element, window.innerHeight / 3)
      if (!visible) return
      element.classList.add('show')
      teamEnable[el.name] = true
    })
    if (Object.keys(teamEnable).every(el => teamEnable[el] === true)) window.removeEventListener('scroll', animation)
  }

  useEffect(() => {
    window.addEventListener('scroll', animation)
    return () => window.removeEventListener('scroll', animation)
  })

  return <React.Fragment>
    {items.map((el, index) => <ContactItem right={index % 2} key={el.slogan}>
      <div>
        <img src="../../../static/img/team/3.jpg" alt=""/>
      </div>
      <TextBox id={index} right={index % 2} >
        <h2 dangerouslySetInnerHTML={{__html: el.post }} />
        <h3>{el.name}</h3>
        <h4>{el.slogan}</h4>
      </TextBox>
    </ContactItem>)}
    </React.Fragment>
    }

export default Team
