import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Layout from './components/Layout'
import { Provider } from 'react-redux'
import configureStore from './components/store/configureStore';

const store = configureStore()

render(
    (<Provider store={store}>
        <Layout/>
    </Provider>), document.getElementById('root')
)
