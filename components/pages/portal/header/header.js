import React from 'react'
import {Link} from '../../../../routes'
import {HeaderImg, RightBox, Title, ExtraTitle, Img, Arrow} from './style'
import {Header} from '../../../../styled/main.style'
import VariationIcons from "../../../smallComponents/variation/variationIcons";
import HeaderBox from '../../../smallComponents/headerBox'

const HeaderComponent = ({l, index, portal2, query}) => {
  const {title, extraTitleOne, extraTitleTwo} = l.portal
  const str = query ? `${query}` : ''
  const linkTo = portal2 ? `${str}/portal` : `${str}/portal2`

  return <HeaderBox>
    <Header index={index}>
      <HeaderImg>
        <Img portal2={portal2}/>
        <svg viewBox="0 0 1320 944" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
          <defs>
            <clipPath id="myClip">
              <path className="st0"
                    d="M0,1l0,970h969c55.2,0,106.1-23.5,144.9-62.8c38.8-39.2,65.6-94.2,72.5-157l83.2-746.1L1270,1L0,1z"/>
            </clipPath>
          </defs>
        </svg>
        <Link to={linkTo}>
          <a href={linkTo}>
            <Arrow right={!portal2} width="42" height="73" viewBox="0 0 42 73" fill="none"
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
          </a>
        </Link>
      </HeaderImg>
      <RightBox>
        <Title><p dangerouslySetInnerHTML={{__html: title}}/></Title>
        <ExtraTitle><p dangerouslySetInnerHTML={{__html: extraTitleOne}}/></ExtraTitle>
        <ExtraTitle last><p dangerouslySetInnerHTML={{__html: extraTitleTwo}}/></ExtraTitle>
        {l.variationText && <VariationIcons left={l.variationText.left}/>}
        {/*<LinkTo>Подробнее</LinkTo>*/}
      </RightBox>
    </Header>
  </HeaderBox>
}

export default HeaderComponent
