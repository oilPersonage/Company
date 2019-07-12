import {useEffect, useRef} from "react";

import {Container, HideDescription, GridBox, DescriptionBox, Item, Img, Text, Title} from './style'

const DescriptionPortal = () => {
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
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  })

  return <Container>
    <h2>Альфа-вк</h2>
    <p>Терминалы, оснащенные системой АСВК продуманы таким образом, что ими комфортно
      будет
      пользоваться абсолютно всем типам граждан и имеют несколько видов форм-факторов, в зависимости от предпочтений.
    </p>
    <DescriptionBox id="scrollTarget">
      <Img id="scrollImage" ref={Image} />
      <HideDescription>
        <GridBox>
          <Item name="one" fill='#c8f5df'>
            <Title>Считыватель штрих-кода</Title>
            <Text>Самый крутой считыватель по версии форбс,
              и каждый блок затемняется по
              наведению мышки на него,
              исчезает название появляется
              описание</Text>
          </Item>
          <Item name="two" fill='#f5f5f5'>
            <Title>Оценка качества работы оператора</Title>
            <Text>Самый крутой считыватель по версии форбс,
              и каждый блок затемняется по
              наведению мышки на него,
              исчезает название появляется
              описание</Text>
          </Item>
          <Item name="three" fill='#d8dcff'>
            <Title>Сканирование и верификация
              документов
            </Title>
            <Text>Самый крутой считыватель по версии форбс,
              и каждый блок затемняется по
              наведению мышки на него,
              исчезает название появляется
              описание</Text>
          </Item>
          <Item name="four" fill='#ffe4bc'>
            <Title>Печать документов</Title>
            <Text>Самый крутой считыватель по версии форбс,
              и каждый блок затемняется по
              наведению мышки на него,
              исчезает название появляется
              описание</Text>
          </Item>
          <Item name='five' fill='#e6f2b3'>
            <Title>Видеовызов оператора</Title>
            <Text>Самый крутой считыватель по версии форбс,
              и каждый блок затемняется по
              наведению мышки на него,
              исчезает название появляется
              описание</Text>
          </Item>
          <Item name='six' fill='#eff5ff'>
            <Title>Ввод показаний и оплата жку</Title>
            <Text className="text">Самый крутой считыватель по версии форбс,
              и каждый блок затемняется по
              наведению мышки на него,
              исчезает название появляется
              описание</Text>
          </Item>
          <Item name='seven' fill='#fbecea'>
            <Title>Заполнение документов</Title>
            <Text className="text">Самый крутой считыватель по версии форбс,
              и каждый блок затемняется по
              наведению мышки на него,
              исчезает название появляется
              описание</Text>
          </Item>
          <Item name='eight' fill='#ffecec'>
            <Title>Электронное обращение</Title>
            <Text className="text">Самый крутой считыватель по версии форбс,
              и каждый блок затемняется по
              наведению мышки на него,
              исчезает название появляется
              описание</Text>
          </Item>
        </GridBox>
      </HideDescription>
    </DescriptionBox>
  </Container>
}

export default DescriptionPortal
