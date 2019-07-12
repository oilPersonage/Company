import {ScreenBox, OtherBox, Sok, Pulpit, Totem, Gendarme, Alphamat, Monolit, Img, OtherTitle, OtherDescr, OtherTextBox} from './style'

const Other = () => {
  return <ScreenBox>
    <OtherBox>
      <Sok>
        <OtherTextBox center>
          <OtherTitle>Искренность</OtherTitle>
          <OtherDescr>на кончике пальца</OtherDescr>
        </OtherTextBox>
        <Img src="../../static/img/index/sok.jpg" alt=""/>
      </Sok>
      <Pulpit>
        <OtherTextBox center>
          <OtherTitle>Точность</OtherTitle>
          <OtherDescr>в каждом нажатии</OtherDescr>
        </OtherTextBox>
        <Img src="../../static/img/index/3term.png" alt=""/>
      </Pulpit>
      <Totem>
        <OtherTextBox c='accent'>
          <OtherTitle>Помощь</OtherTitle>
          <OtherDescr>в поисках короткого маршрута</OtherDescr>
        </OtherTextBox>
        <Img src="../../static/img/index/totem.jpg" alt=""/>
      </Totem>
      <Gendarme>
        <OtherTextBox c='accent'>
          <OtherTitle>Прагматизм</OtherTitle>
          <OtherDescr>в деталях</OtherDescr>
        </OtherTextBox>
        <Img src="../../static/img/index/jdrm.jpg" alt=""/>
      </Gendarme>
      <Alphamat>
        <OtherTextBox center>
          <OtherTitle>Искренность</OtherTitle>
          <OtherDescr>на кончике пальца</OtherDescr>
        </OtherTextBox>
        <Img src="../../static/img/index/5.jpg" alt=""/>
      </Alphamat>
      <Monolit>
        <OtherTextBox c='accent'>
          <OtherTitle>Искренность</OtherTitle>
          <OtherDescr>на кончике пальца</OtherDescr>
        </OtherTextBox>
        <Img src="../../static/img/index/4.jpg" alt=""/>
      </Monolit>
    </OtherBox>
  </ScreenBox>
}

export default Other
