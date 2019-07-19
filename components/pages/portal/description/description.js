import {useEffect, useRef} from "react";

import {Container, HideDescription, GridBox, DescriptionBox, Item, Img, Text, Title} from './style'
import {DescriptionTitle, SectionHead, SectionTitle} from '../../../../styled/main.style'

const DescriptionPortal = ({l, portal2}) => {
  const Image = useRef(null)

  let progress;

  const getCoords = (el) => {
    const img = el.getBoundingClientRect();
    const progressPX = img.top - 800 < window.pageYOffset - window.innerHeight / 2
    progress = progressPX ? window.pageYOffset - window.innerHeight - 50 : progress
    const p = progress / 800

    return { p };
  }

  const onScroll = () => {
    const view = getCoords(Image.current)
    const p = view.p > 1 ? 1 : view.p < 0 ? 0 : view.p

    Image.current.style.transform = `translateY(${1100 * p}px) translateX(${300*p}px) scale(${1+p *1.6})`
  }

  useEffect(() => {
    if (window.innerWidth < 1367) return
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  })

  const {title, extraTitle, data} = l

  const newData = data.filter(el => {
    if (!portal2) return el.portal2 === undefined
    return el
  })
  return <Container>
    <SectionHead>
      <SectionTitle>{title}</SectionTitle>
      <DescriptionTitle>{extraTitle}</DescriptionTitle>
    </SectionHead>
    <DescriptionBox id="scrollTarget">
      <Img id="scrollImage" portal2={portal2} ref={Image} />
      <HideDescription>
        <GridBox portal2={portal2}>
          {newData.map((el) => <Item key={el.name} fill={el.fill} name={el.name}>
                <Title>{el.head}</Title>
                <Text>{el.text}</Text>
              </Item>)}
        </GridBox>
      </HideDescription>
    </DescriptionBox>
  </Container>
}

export default DescriptionPortal
