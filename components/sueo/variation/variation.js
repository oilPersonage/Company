import React from 'react'
import VariationComponent from '../../variation/variation'

const Variation = ({title, variationText}) => {
  const images = [
    <img src='../../../static/img/sueo/alfamat.png'/>,
    <img src='../../../static/img/sueo/kafedra.png'/>,
    <img src='../../../static/img/sueo/sueo2.png'/>,
  ]
  return <React.Fragment>
    <VariationComponent title={title} variationText={variationText} images={images}/>
  </React.Fragment>
}

export default Variation
