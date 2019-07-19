import React from 'react'

import {Img} from './style'
import {Header as HeaderComponent} from '../../../../styled/main.style'
import {Title, ExtraTitle, RightBox, HeaderImg} from '../../portal/header/style'
import VariationIcons from '../../../smallComponents/variation/variationIcons'

const Header = ({l, variationText}) => {
    const {title, text, extraTitle} = l
    return <HeaderComponent>
      <HeaderImg p>
        <Img />
        <svg viewBox="0 0 1320 944" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
          <defs>
            <clipPath id="myClip">
              <path className="st0"
                    d="M0,1l0,970h969c55.2,0,106.1-23.5,144.9-62.8c38.8-39.2,65.6-94.2,72.5-157l83.2-746.1L1270,1L0,1z"/>
            </clipPath>
          </defs>
        </svg>
      </HeaderImg>
      <RightBox>
        <Title><p dangerouslySetInnerHTML={{__html: title}} /></Title>
        <ExtraTitle><p dangerouslySetInnerHTML={{__html: extraTitle}} /></ExtraTitle>
        <ExtraTitle><p dangerouslySetInnerHTML={{__html: text}} /></ExtraTitle>
        {variationText && <VariationIcons left={variationText.left}/>}
      </RightBox>
    </HeaderComponent>
}

export default Header
