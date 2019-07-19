import Params from '../../../smallComponents/params'
import {Container, PropertiesHead} from './style'
import {SectionTitle, DescriptionTitle, SectionHead} from '../../../../styled/main.style'

const Properties = ({l}) => {
  const {params, title, description} = l
  return <Container>
    <PropertiesHead>
      <SectionHead>
        <SectionTitle>{title}</SectionTitle>
        <DescriptionTitle>{description}</DescriptionTitle>
      </SectionHead>
      <Params name={'top'} arr={params} />
    </PropertiesHead>
  </Container>
}

export default Properties
