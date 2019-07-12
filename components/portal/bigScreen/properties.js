import Params from '../../smallComponents/params'
import {Container, PropertiesHead} from './style'
import {SectionTtitle} from '../../../styled/main.style'

const Properties = ({l}) => {
  const {params, title, description} = l.portal.bigScreen
  return <Container>
    <PropertiesHead>
      <SectionTtitle>{title}</SectionTtitle>
      <p>{description}</p>
      <Params name={'top'} arr={params} />
    </PropertiesHead>
  </Container>
}

export default Properties
