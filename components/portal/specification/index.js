import Params from '../../smallComponents/params'
import {SpecificationBox, PropertiesContainer, SpecififcationImg} from './style'

const Specification = ({l}) => {
  const {specification: {title, description, params}} = l.portal
  return <SpecificationBox>
    <div>
      <PropertiesContainer className="propertiesContainer propAnim2">
        <h2 dangerouslySetInnerHTML={{__html: title}}/>
        <Params name={'specification'} arr={params}/>
      </PropertiesContainer>
    </div>
    <SpecififcationImg>
      <img src="../../../static/img/asvk/4.png" alt=""/>
    </SpecififcationImg>
  </SpecificationBox>
}

export default Specification
