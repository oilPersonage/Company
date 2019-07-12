import App, {Container} from 'next/app'
import Head from 'next/head'
import React from 'react'
import { PageTransition } from 'next-page-transitions'
import {GlobalStyle, Body} from '../styled/main.style'
import Nav from '../components/nav/nav'
import language from '../utils/lang/index'
import ShadowRouter from '../components/shadowRouter/Shadow'

import Portal from '../components/portal/header/header'

export default class MyApp extends App {
  constructor(props) {
    super(props)
    this.state = {
      nextRouter: 0,
      animation: false
    }
  }
  static async getInitialProps ({ Component, router, ctx }) {
    let pathname;
    pathname = ctx.pathname
    const {lang} = ctx.query
    let pageProps = {}
    const l = language(lang ? 0 : 1)
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx, router)
    }
    return {pageProps, router, l, lang, pathname}
  }

  changeAnim = ( number) => {
    this.setState({animation: true, nextRouter: number})
    setTimeout(() => this.setState({animation: false}), 1000)
  }

  render () {
    const {Component, pageProps, router, l, lang, pathname} = this.props

    return <Container>
      <Head>
        <title>Альфа-БТ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyle/>
      <Body>
        <Nav
          path={pathname}
          l={l}
          activeLang={lang ? 0 : 1}/>
        <ShadowRouter l={l} {...this.state}/>
        <Component changeAnim={this.changeAnim} animationToPage={this.state.animation} query={lang} {...pageProps} l={l} key={router.asPath}/>
      </Body>
    </Container>
  }
}
