import React from 'react'
import Header from '../components/pages/alpha-vd/header/header'
import Algorithm from "../components/pages/alpha-vd/algorithm/alghorithm";
import Variation from "../components/smallComponents/variation/variation";
import Form from "../components/smallComponents/form";

const Alpha = ({l}) => {
 const {algorithm, variation} = l.alpha
  const images = [
    <img src='../static/img/sueo/alfamat.png'/>,
    <img src='../static/img/sueo/kafedra.png'/>,
    <img src='../static/img/sueo/sueo2.png'/>,
  ]
 return <div>
  <Header l={l.alpha}/>
  <Algorithm l={algorithm}/>
  <Variation images={images} title={variation} variationText={l.variationText} />
  <Form l={l}/>
 </div>
}

export default Alpha
