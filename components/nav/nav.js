import {Link, Router} from '../../routes';
import {NavBox, Nav, Item, ContactBox, RightMenu, Lang, SwitchLang, Phone, LogoBox, Abs} from './style'
import c from "../../styled/color";
import styled from "styled-components";

export default ({l, activeLang, path = "/"}) => {

  const nav = [
    {text: l.home, href: '#'},
    {text: l.support, href: '#'},
    {text: l.team, href: '#'},
    {text: l.onlineSUEO, href: '#'},
    {text: l.contacts, href: '#'},
  ]

  const getText = (n, index) => {
    return <Item key={n.text} active={index === 0} href={n.href}>{n.text}</Item>
  }

  return <Nav>
    <LogoBox onClick={() => Router.push('/')}>
      <img src="../../static/img/logo.png" alt="" />
    </LogoBox>
    <NavBox>
      {nav.map((n, index) => getText(n, index))}
    </NavBox>
    <RightMenu>
      <ContactBox>
        <Phone active href="tel:+78000001212">{l.phone}</Phone>
        <a href="mailto:info@a-bt.ru">{l.email}</a>
      </ContactBox>
      <SwitchLang>
        <Link route={`${path === '/' ? '' : path}/`}>
          <Lang active={activeLang}>{l.ru}</Lang>
        </Link>
        <Link route={`/en${path}`}>
          <Lang active={!activeLang}>en</Lang>
        </Link>{' '}
        <Abs active={activeLang}/>
      </SwitchLang>
    </RightMenu>
  </Nav>
}

