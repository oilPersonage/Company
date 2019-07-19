import App, {Container} from 'next/app'
import Head from 'next/head'
import React from 'react'
import {GlobalStyle, Body} from '../styled/main.style'
import Nav from '../components/nav/nav'
import language from '../utils/lang/index'
import ShadowRouter from '../components/shadowRouter/Shadow'

export default class MyApp extends App {
  constructor(props) {
    super(props)
    this.state = {
      nextRouter: 0,
      animation: false,
      mobile: false,
    }
    this.changeAnim = this.changeAnim.bind(this)
  }
  static async getInitialProps ({ Component, router, ctx }) {
    const {lang, pathname} = ctx.query
    let pageProps = {}
    const l = language(lang ? 0 : 1)
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx, router)
    }
    return {pageProps, router, l, lang, id: ctx.query.id, pathname}
  }

  changeAnim (number) {
    this.setState({animation: true, nextRouter: number})
    setTimeout(() => this.setState({animation: false}), 1500)
  }
  componentDidMount() {
    this.setState({mobile: window.innerWidth <= 1024})
    console.log(window.innerWidth, window.innerWidth < 1024)
  }

  render () {
    const {Component, pageProps, router, l, lang, pathname, id} = this.props
    const {mobile} = this.state

    return <Container>
      <Head>
        <title>Альфа-БТ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyle/>
      <Body>
        <Nav path={pathname} mobile={mobile} l={l} activeLang={lang ? 0 : 1}/>

        {/*<ShadowRouter l={l} {...this.state}/>*/}
        <Component changeAnim={this.changeAnim} mobile={mobile} animationToPage={this.state.animation} query={lang} id={id} {...pageProps} l={l} key={router.asPath}/>
      </Body>
    </Container>
  }
}
