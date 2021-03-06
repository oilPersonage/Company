import {Link, Router} from '../../../routes'

import {ScreenBoxParus, Box, DescriptionSystem, LinkToSystem} from './style'
import {useState} from "react";

const Sail = ({active, l, query, stopScroll}) => {
  const pathname = query ? `${query}/sail` : '/sail'
  const [anim, setAnim] = useState(false)
  const setAnimation = (e) => {
    e.preventDefault()
    setAnim(true)
    stopScroll(true)
    setTimeout(() => {
      console.log(pathname)
      Router.push(({ pathname }))
    }, 1000)
  }
  return <ScreenBoxParus anim={anim}>
    <Box active={active}>
      <h2>Автоматизированная система<br/> Бюро пропусков</h2>
      <DescriptionSystem active={active}>
        <p>
          Главный по пропускам
        </p>
      </DescriptionSystem>
      <LinkToSystem active={active}  onClick={setAnimation} href={pathname}>Подробнее</LinkToSystem>
    </Box>
  </ScreenBoxParus>
}

export default Sail
