import React, {useState, useRef} from 'react'

import {PageBox, ScrollBox, ScrollToSlide, LineAnimation, Line, LineAfter, ScrollNumber} from '../components/pages/index/style'
import Portal from '../components/pages/index/portal'
import Sueo from '../components/pages/index/sueo'
import Sail from '../components/pages/index/sail'
import OtherSystem from '../components/pages/index/otherSystem'


const Home = ({...props}) => {
  const {lang, l, changeAnim, query, animationToPage} = props
  const [activeScreen, setScreen] = useState(0)
  const [activeNumber, setActiveNumb] = useState(0)
  const [anim, setAnim] = useState(true)
  const scrollItem = useRef(null)
  const LineAnim = useRef(null)
  const LineAnimAfter = useRef(null)
  //


  const AnimationScroll = (position) => {
    const height = window.innerHeight
    scrollItem.current.style.transform = `translateY(${-height * position}px)`
    LineAnim.current.style.transform = `translateY(${26 * position}px)`
    LineAnimAfter.current.style.transform = `translateY(${26 * position}px)`
  }

  function onScroll (e) {
    if (animationToPage) return
    let dir = e.deltaY / 100
    dir = dir < -1 ? -1 : dir > 1 ? 1 : dir
    if (anim === false) return
    if ((activeScreen === 0 && dir === -1) || (activeScreen === 3 && dir ===1)) return
    setAnim(false)
    setTimeout(() => {
      setScreen(newActive)
      setAnim(true)
    }, 500)

    const newActive = activeScreen + dir
    setActiveNumb(newActive)
    AnimationScroll(newActive)
  }

  const scrollTo = (numb) => {
    setScreen(numb)
    setActiveNumb(numb)
    AnimationScroll(numb)
  }

  return <PageBox onWheel={onScroll}>
      <ScrollBox ref={scrollItem}>
        <Portal change={changeAnim} query={query} l={l} active={activeScreen === 0}/>
        <Sueo change={changeAnim} query={query} l={l} active={activeScreen === 1}/>
        <Sail change={changeAnim} query={query} l={l} active={activeScreen === 2}/>
        <OtherSystem l={l} active={activeScreen === 3}/>
      </ScrollBox>
      <ScrollToSlide>
        <LineAnimation>
          <Line ref={LineAnim}></Line>
          <LineAfter ref={LineAnimAfter}></LineAfter>
        </LineAnimation>
        <ScrollNumber active={activeNumber === 0} onClick={() => scrollTo(0)}>01</ScrollNumber>
        <ScrollNumber active={activeNumber === 1} onClick={() => scrollTo(1)}>02</ScrollNumber>
        <ScrollNumber active={activeNumber === 2} onClick={() => scrollTo(2)}>03</ScrollNumber>
        <ScrollNumber active={activeNumber === 3} onClick={() => scrollTo(3)}>04</ScrollNumber>
      </ScrollToSlide>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svgFilter">
        <defs>
          <filter id="shadowed-goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"/>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"/>
            <feGaussianBlur in="goo" stdDeviation="3" result="shadow"/>
            <feComposite in2="goo" in="SourceGraphic" result="mix"/>
          </filter>
        </defs>
      </svg>
    </PageBox>
  // </Body>
}

Home.getInitialProps = ({ query }) => {
  return query
}

export default Home
