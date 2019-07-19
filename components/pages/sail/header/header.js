import React from 'react'
import { HeaderBox, ImgBox, TextBox, SectionName, ItemBox, Title, ItemContainer } from './style'
import { SectionHead, LinkToForm } from '../../../../styled/main.style'

const Header = ({l, index}) => {
 const {name, title, left, description, linkTo} = l.sail.header
 return <HeaderBox index={index}>
   <ImgBox>
     <svg viewBox="0 0 1920 971">
       <clipPath id='clipSail'>
         <path className="st0" d="M650.4-7.8l0.4,3.9L734,707.6c6.9,59.9,33.7,112.3,72.5,149.7c38.8,37.5,89.7,59.9,144.9,59.9h969v-925L650.4-7.8z"/>
       </clipPath>
     </svg>
     <SectionHead margin='0 0 0 300px'>
      <SectionName>
        {name}
        <span>{title}</span>
      </SectionName>
     </SectionHead>
   </ImgBox>
   <TextBox>
     <ItemContainer>
       {left.map(el => <ItemBox key={el.title} >
         <Title>{el.title}</Title>
         <p>{el.text}</p>
       </ItemBox>)
       }
     </ItemContainer>
     <p dangerouslySetInnerHTML={{__html: description}} />
       <LinkToForm href='/#'>{linkTo}</LinkToForm>
   </TextBox>
 </HeaderBox>
}

export default Header
