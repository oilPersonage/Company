import {ScreenBoxAsvk, Box, DescriptionSystem, LinkToSystem} from './style'
import {Router} from "../../../routes";
import AnimationWrapper from './animationWrapper'
import React from "react";

const Sueo = ({...props}) => {
  // const [anim, setAnim] = useState(false)
  const {active, l, setAnimation, pathname} = props
  // const pathname = query ? `/${query}/sueo` : '/sueo'
  // const setAnimation = (e) => {
  //   e.preventDefault()
  //   setAnim(true)
  //   stopScroll(true)
  //   setTimeout(() => {
  //     Router.push(({ pathname }))
  //   }, 1000)
  // }
  return (
      <ScreenBoxAsvk>
      <Box active={active}>
      <h2>{l.sueoTitle}<br/>{l.sueoNewLine}</h2>
      <DescriptionSystem right active={active}>
        <p>{l.sueoDescr}</p>
      </DescriptionSystem>
      <LinkToSystem right active={active} onClick={setAnimation} href={pathname}>Подробнее</LinkToSystem>
    </Box>
    </ScreenBoxAsvk>)
}

export default React.memo(Sueo)
