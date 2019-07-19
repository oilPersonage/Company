import {useState} from 'react'
import {Container, ContainerText, Title, ExtraTitle, ContainerBody, ImgBox, AbsoluteBox, QrCode,
  Lazer, TwoMonitor, SensorButton, Camera, PayPass, PhotoScan, Left, Right, Item, BgColor, CardReader, PinPad, Money, Phone} from './style'
import {DescriptionTitle, SectionHead, SectionTitle} from '../../../../styled/main.style'

const smallScreen = ({l, portal2}) => {
  const [active, setActive] = useState('')
  const {title, extraTitle, left, right} = l

  const newRight = portal2 ? right.slice(0) : right.slice(0, 7)
 return <section>
   <Container>
     <ContainerText>
       <SectionHead>
         <SectionTitle>{title}</SectionTitle>
         <DescriptionTitle>{extraTitle}</DescriptionTitle>
       </SectionHead>
     </ContainerText>
     <ContainerBody>
       <ImgBox portal2={portal2}>
         <AbsoluteBox>
           <QrCode portal2={portal2} active={active === 0}/>
           <Lazer portal2={portal2} active={active === 1} />
           <TwoMonitor portal2={portal2} active={active === 2} />
           <SensorButton portal2={portal2} active={active === 3} />
           <Camera portal2={portal2} active={active === 4} />
           <PayPass portal2={portal2} active={active === 5} />
           <PhotoScan portal2={portal2} active={active === 6} />
           {portal2 && <CardReader active={active === 7}/>}
           {portal2 && <PinPad active={active === 8}/>}
           {portal2 && <Money active={active === 9}/>}
           {portal2 && <Phone active={active === 10}/>}
         </AbsoluteBox>
         {portal2
           ? <img src="../../../static/img/asvk/32.png" alt=""/>
           : <img src="../../../static/img/asvk/3.png" alt=""/>
         }

       </ImgBox>
       <BgColor />
       <svg version="1.1" viewBox="0 0 1920 1080">
            <clipPath id="clipControlArea">
                <path className="st0" d="M-0.5,1080.5h1920V0.5l0,0C1301.2,232.6,619.7,232.8,0,1.2l-1.8-0.7V1080.5z"/>
            </clipPath>
        </svg>
       <Left>
         {left.map(el => <Item key={el}>{el}</Item>)}
       </Left>
       <Right>
         {newRight.map((r, index) => <Item onMouseLeave={() => setActive('')} onMouseOver={() => setActive(index)} key={r} >{r}</Item>)}

          {/*<Item onMouseLeave={() => setActive('')} onMouseOver={() => setActive('qr')}>Считывание QR-кода, штрих-кода, RFID-меток</Item>*/}
          {/*<Item onMouseLeave={() => setActive('')} onMouseOver={() => setActive('la')}>Лазерный Принтер А4 </Item>*/}
          {/*<Item onMouseLeave={() => setActive('')} onMouseOver={() => setActive('tm')}>Второй монитор 18,5 дюймов</Item>*/}
          {/*<Item onMouseLeave={() => setActive('')} onMouseOver={() => setActive('sb')}>Три сенсорные кнопки</Item>*/}
          {/*<Item onMouseLeave={() => setActive('')} onMouseOver={() => setActive('ca')}>Камера Full hd разрешения</Item>*/}
          {/*<Item onMouseLeave={() => setActive('')} onMouseOver={() => setActive('pa')}>Paypass</Item>*/}
          {/*<Item onMouseLeave={() => setActive('')} onMouseOver={() => setActive('phs')}>фотосканер</Item>*/}
       </Right>
     </ContainerBody>
   </Container>
 </section>
}

export default smallScreen
