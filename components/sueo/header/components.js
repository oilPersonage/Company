import React from 'react'
import {Link} from '../../../routes'
import {ComponentBox, ComponentItem, TitleBox, PsevdoTitle} from './style'

const Components = ({l}) => {
  const {sueo: {header: {componentsList, componentsTitle}}} = l
 return <ComponentBox>
   <h2>{componentsTitle}</h2>
   {componentsList.map((el, index) => <ComponentItem hover={el.link} accent={index % 2 === 0} key={el.title}>
     {el.link
       ? <Link route={el.link}>
         <TitleBox>{el.title}</TitleBox>
       </Link>
       : <PsevdoTitle>
         {el.title}
       </PsevdoTitle>
     }
     <p>{el.extra}</p>
   </ComponentItem>)}
 </ComponentBox>
}

export default Components
