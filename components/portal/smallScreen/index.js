import {useState} from 'react'
import {Container, ContainerText, Title, ExtraTitle, ContainerBody, ImgBox, AbsoluteBox, QrCode,
  Lazer, TwoMonitor, SensorButton, Camera, PayPass, PhotoScan, Left, Right, Item, BgColor} from './style'

const smallScreen = () => {
  const [active, setActive] = useState('')
  console.log({active})
 return <section>
   <Container>
     <ContainerText>
       <Title>Зона управления</Title>
       <ExtraTitle>Находится в легкодоступном месте что позволяет всем видам граждан
         пользоваться терминалом без труда.</ExtraTitle>
     </ContainerText>
     <ContainerBody>
       <ImgBox>
         <AbsoluteBox>
           <QrCode active={active === 'qr'}/>
           <Lazer active={active === 'la'} />
           <TwoMonitor active={active === 'tm'} />
           <SensorButton active={active === 'sb'} />
           <Camera active={active === 'ca'} />
           <PayPass active={active === 'ps'} />
           <PhotoScan active={active === 'phs'} />
         </AbsoluteBox>

         <img src="../../../static/img/asvk/3.png" alt="" />
       </ImgBox>
       <BgColor />
       <svg version="1.1" viewBox="0 0 1920 1080">
            <clipPath id="clipControlArea">
                <path className="st0" d="M-0.5,1080.5h1920V0.5l0,0C1301.2,232.6,619.7,232.8,0,1.2l-1.8-0.7V1080.5z"/>
            </clipPath>
        </svg>
       <Left>
         <Item>Многофункциональный
           пользовательский интерфейс</Item>
         <Item>мультиязычность</Item>
         <Item>Удобство в использовании</Item>
         <Item>Система оценки качества
           работы оператара по окончанию сеанса</Item>
         <Item>Выведение оператором
           необходимой Информации</Item>
       </Left>
       <Right>
         <Item onMouseLeave={() => setActive('')} onMouseOver={() => setActive('qr')}>Считывание QR-кода, штрих-кода, RFID-меток</Item>
         <Item onMouseLeave={() => setActive('')} onMouseOver={() => setActive('la')}>Лазерный Принтер А4 </Item>
         <Item onMouseLeave={() => setActive('')} onMouseOver={() => setActive('tm')}>Второй монитор 18,5 дюймов</Item>
         <Item onMouseLeave={() => setActive('')} onMouseOver={() => setActive('sb')}>Три сенсорные кнопки</Item>
         <Item onMouseLeave={() => setActive('')} onMouseOver={() => setActive('ca')}>Камера Full hd разрешения</Item>
         <Item onMouseLeave={() => setActive('')} onMouseOver={() => setActive('pa')}>Paypass</Item>
         <Item onMouseLeave={() => setActive('')} onMouseOver={() => setActive('phs')}>фотосканер</Item>
       </Right>
     </ContainerBody>
   </Container>
 </section>
}

export default smallScreen
