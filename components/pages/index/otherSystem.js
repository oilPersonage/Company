import {Link} from '../../../routes'
import {ScreenBox, OtherBox, Sok, Pulpit, Totem, Gendarme, Alphamat, Monolit, Img, OtherTitle, OtherDescr, OtherTextBox} from './style'

const Other = ({query}) => {
  return <ScreenBox>
    <OtherBox>
      <Link route={query ? `${query}/sueo/?id=sok'` : '/sueo/?id=sok'}>
        <a href={query ? `${query}/sueo/sok` : '/sueo/sok'}>
          <OtherTextBox center>
            <OtherTitle>Искренность</OtherTitle>
            <OtherDescr>на кончике пальца</OtherDescr>
          </OtherTextBox>
          <Img src="../../../static/img/index/sok.jpg" alt=""/>
        </a>
      </Link>
      <Link to='/alpha-vd'>
        <a href={'/alpha-vd'}>
          <OtherTextBox center>
            <OtherTitle>Точность</OtherTitle>
            <OtherDescr>в каждом нажатии</OtherDescr>
          </OtherTextBox>
          <Img src="../../../static/img/index/3term.png" alt=""/>
        </a>
      </Link>
      <Link to='/totem'>
        <a href={'/totem'}>
          <OtherTextBox c='accent'>
            <OtherTitle>Помощь</OtherTitle>
            <OtherDescr>в поисках короткого маршрута</OtherDescr>
          </OtherTextBox>
          <Img src="../../../static/img/index/totem.jpg" alt=""/>
        </a>
      </Link>
      <Link to='/gendarme'>
        <a href={'/gendarme'}>
          <OtherTextBox c='accent'>
            <OtherTitle>Прагматизм</OtherTitle>
            <OtherDescr>в деталях</OtherDescr>
          </OtherTextBox>
          <Img src="../../../static/img/index/jdrm.jpg" alt=""/>
        </a>
      </Link>
      <Link to='/alpha-mat'>
        <a href={'/alpha-mat'}>
          <OtherTextBox center>
            <OtherTitle>Искренность</OtherTitle>
            <OtherDescr>на кончике пальца</OtherDescr>
          </OtherTextBox>
          <Img src="../../../static/img/index/5.jpg" alt=""/>
        </a>
      </Link>
      <Link to='/monolit'>
        <a href={'/monolit'}>
          <OtherTextBox c='accent'>
            <OtherTitle>Искренность</OtherTitle>
            <OtherDescr>на кончике пальца</OtherDescr>
          </OtherTextBox>
          <Img src="../../../static/img/index/4.jpg" alt=""/>
        </a>
      </Link>
    </OtherBox>
  </ScreenBox>
}

export default Other
