import React, {useState} from 'react'
import Carousel from '../../../smallComponents/variation/carousel/carousel'

import {RightBox, QuestBox, QuestItem, Title, Body, BodyBox, Arrow} from './style'
import {SectionTitle, DescriptionTitle, SectionHead} from '../../../../styled/main.style'
import VariationIcons from "../../../smallComponents/variation/variationIcons";

const Quest = ({l, left}) => {
  const {items, title, description} = l
  const [active, setActive] = useState(0)
  const images = [
    <img src='../../../../static/img/alpha-mat/category/1.png' />,
    <img src='../../../../static/img/alpha-mat/category/2.png' />,
    <img src='../../../../static/img/alpha-mat/category/3.png' />,
  ]

  return <QuestBox>
    <SectionHead>
      <SectionTitle>{title}</SectionTitle>
      <DescriptionTitle>{description}</DescriptionTitle>
    </SectionHead>
    <BodyBox>
      <div>
        <Carousel quest images={images}/>
      </div>
      <RightBox>
        {items.map((el, index) => <QuestItem active={active === index}>
          <Title onClick={() => setActive(index)} active={active === index}>
            {el.title}

            <Arrow active={active === index} width="42" height="73" viewBox="0 0 42 73" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
                <path
                  d="M23.7088 32.9339C25.7022 34.8933 25.7021 38.1065 23.7084 40.0658L3.99747 59.4369C2.00321 61.3968 2.00374 64.6112 3.99865 66.5704L4.38589 66.9507C6.33152 68.8615 9.44946 68.8609 11.3943 66.9492L38.745 40.0659C40.7384 38.1065 40.7384 34.8935 38.745 32.9342L11.3955 6.05201C9.4502 4.13992 6.33132 4.13982 4.38587 6.0518L4.00103 6.43001C2.00744 8.3893 2.00731 11.6024 4.00075 13.5619L23.7088 32.9339Z"
                  fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="42" height="73" fill="white" transform="matrix(1 0 0 -1 0 73)"/>
                </clipPath>
              </defs>
            </Arrow>

          </Title>
          <Body active={active === index}>
            {el.text}
          </Body>
        </QuestItem>)
        }
        <VariationIcons left={left}/>
      </RightBox>
    </BodyBox>
  </QuestBox>
}

export default Quest
