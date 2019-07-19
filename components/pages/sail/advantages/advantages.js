import React from 'react'

import {ItemBox, AdvantageBox} from './style'

const Advantage = ({l}) => {
  return <AdvantageBox>
    {l.map((el, index) => <ItemBox key={el.title}>
      <object type="image/svg+xml" data={`../../../../static/img/sail/icons/advantages/${index + 1}.svg`} />
      <h4>{el.title}</h4>
      <p>{el.text}</p>
    </ItemBox>)
    }
  </AdvantageBox>
}

export default Advantage
