import {useState, useEffect} from 'react'
import {Link, Router} from '../../routes';
import {NavBox, Nav, Item, ContactBox, RightMenu, Lang, SwitchLang, Phone, LogoBox, Abs, HamburgerBox} from './style'

export default ({l, activeLang, path = "/", mobile}) => {
  const [active, setActive] = useState(false)

  const nav = [
    {text: l.home, href: '#'},
    {text: l.support, href: '#'},
    {text: l.team, href: '/team'},
    {text: l.onlineSUEO, href: '#'},
    {text: l.contacts, href: '/contacts'},
  ]

  const getText = (n, index) => {
    return <Link to={n.href}>
      <Item onClick={() => setActive(!active)} key={n.text} active={index === 0} href={n.href}>{n.text}</Item>
    </Link>
  }
  console.log(mobile)
  return <Nav>
    <HamburgerBox active={active} onClick={() => setActive(!active)} htmlFor='input'>
      <div>
        <span />
        <span />
      </div>
    </HamburgerBox>
    <LogoBox onClick={() => Router.push('/')}>
      <img src="../../static/img/logo.png" alt="" />
    </LogoBox>
    <NavBox className={active ? 'show' : mobile ? 'hide' : ''} active={active}>
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

