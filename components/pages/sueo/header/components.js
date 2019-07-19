import React from 'react'
import {Link} from '../../../../routes'
import {ComponentBox, ComponentItem, TitleBox, PsevdoTitle} from './style'

const Components = ({l}) => {
 const {componentsList, componentsTitle} = l

 const scrollTo = (e, el) => {
   e.preventDefault()
   const element = document.getElementById(el)
   console.log({el, element})
   element.scrollIntoView({
     behavior: 'smooth',
     start: 'block'
   })
 }

 return <ComponentBox>
   <h2>{componentsTitle}</h2>
   {componentsList.map((el, index) => <ComponentItem hover={el.link} accent={index % 2 === 0} key={el.title}>
     {el.link
       ? <a  onClick={(e)=>scrollTo(e, el.link)} href={el.link}>
         <TitleBox>{el.title}</TitleBox>
       </a>
       : <PsevdoTitle>
         {el.title}
       </PsevdoTitle>
     }
     <p>{el.extra}</p>
   </ComponentItem>)}
 </ComponentBox>
}

export default Components
