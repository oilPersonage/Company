import App, {Container} from 'next/app'
import Head from 'next/head'
import React from 'react'
import {GlobalStyle, Body} from '../styled/main.style'
import Nav from '../components/nav/nav'
import language from '../utils/lang/index'

export default class MyApp extends App {
  constructor(props) {
    super(props)
    this.state = {
      mobile: false,
    }
  }
  static async getInitialProps ({ Component, router, ctx }) {
    const {lang} = ctx.query
    let pageProps = {}
    const l = language(lang ? 0 : 1)
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx, router)
    }
    return {pageProps, router, l, lang, id: ctx.query.id}
  }

  componentDidMount() {
    this.setState({mobile: window.innerWidth <= 1024})
  }

  render () {
    const {Component, pageProps, router, l, lang, id} = this.props
    const {mobile} = this.state

    return <Container>
      <Head>
        <title>Альфа-БТ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyle/>
      <Body>
        <Nav path={router.pathname} mobile={mobile} l={l} activeLang={lang ? 0 : 1}/>

        <Component mobile={mobile} query={lang} id={id} {...pageProps} l={l} key={router.asPath}/>
      </Body>
    </Container>
  }
}
