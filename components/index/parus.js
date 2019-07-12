import {ScreenBoxParus, Box, DescriptionSystem, LinkToSystem} from './style'

const Parus = ({active}) => {
  return <ScreenBoxParus>
    <Box active={active}>
      <h2>Автоматизированная система<br/> Бюро пропусков</h2>
      <DescriptionSystem active={active}>
        <p>
          Главный по пропускам
        </p>
      </DescriptionSystem>
      <LinkToSystem active={active} href='./asvk.html'>Подробнее</LinkToSystem>
    </Box>
  </ScreenBoxParus>
}

export default Parus
