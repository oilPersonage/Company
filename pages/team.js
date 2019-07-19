import React from 'react'
import ContactBody from '../components/pages/team/team'

import { ContactBox } from '../styled/main.style'

const Team = ({l}) => {
  const {items} = l.teams
  return <ContactBox>
    <ContactBody items={items} />
  </ContactBox>
}

export default Team
