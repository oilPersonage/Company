import Params from '../../../smallComponents/params'
import {SpecificationBox, PropertiesContainer, SpecififcationImg} from './style'

const Specification = ({l, portal2}) => {
  const {title, params} = l
  const style = {
    marginLeft: -250,
    top: 100,
  }
  return <SpecificationBox>
    <div>
      <PropertiesContainer className="propertiesContainer propAnim2">
        <h2 dangerouslySetInnerHTML={{__html: title}}/>
        <Params name={'specification'} arr={params}/>
      </PropertiesContainer>
    </div>
    <SpecififcationImg>
      {portal2
        ? <img style={style} src="../../../static/img/asvk/42.png" alt=""/>
        : <img src="../../../static/img/asvk/4.png" alt=""/>
      }
    </SpecififcationImg>
  </SpecificationBox>
}

export default Specification
