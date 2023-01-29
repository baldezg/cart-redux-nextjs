import '@/styles/Home.module.css'

import type { AppProps } from 'next/app'

import { Provider } from  'react-redux'

import store from '../redux/store'

import  GlobalStyle  from '../styles/globals'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>

    <GlobalStyle />

    <Component {...pageProps} />

    </Provider>
    
    )
}
