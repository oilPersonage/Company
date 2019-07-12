import {ScreenBoxAsvk, Box, DescriptionSystem, LinkToSystem} from './style'
import {Router} from "../../routes";
import {useState} from "react";

const Sueo = ({...props}) => {
  const [anim, setAnim] = useState(false)
  const {active, l, change, query} = props

  const setAnimation = (e) => {
    e.preventDefault()
    setAnim(true)
    change(1)
    setTimeout(() => {
      Router.push(({ pathname: query ? `/${query}/sueo` : '/sueo'}))
    }, 1000)
  }
  return (<ScreenBoxAsvk anim={anim}>
    <Box active={active}>
    <h2>{l.sueoTitle}<br/>{l.sueoNewLine}</h2>
    <DescriptionSystem right active={active}>
      <p>{l.sueoDescr}</p>
    </DescriptionSystem>
    <LinkToSystem right active={active} onClick={setAnimation} href='./asvk.html'>Подробнее</LinkToSystem>
  </Box>
  </ScreenBoxAsvk>)
}

export default Sueo
