import { useEffect, useState, useRef } from 'react'
import {PropertiesBox, Item} from "../../styled/main.style";
import Visible from '../../utils/findPosition'

const Params = ({arr, name}) => {
  const [show, setShow] = useState(false)
  const p = {
    [name] : useRef(false)
  }

  const Scroll = (e) => {
    const vis = Visible(p[name].current, 500)
    if (!show && vis) setShow(true)
  }

  useEffect(() => {
    window.addEventListener('scroll', Scroll)
    return () => window.removeEventListener('scroll', Scroll)
  })

  return <PropertiesBox ref={p[name]}>
    {arr.map((el, index) => <Item show={show} key={index} index={index}>
      <p>{el.name}</p>
      <p>{el.value}</p>
    </Item>
    )}
  </PropertiesBox>
}

export default Params
