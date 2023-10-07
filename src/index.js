import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './css/base.css'
import { Provider } from 'react-redux'
import { store } from 'store'
import { HashRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<div>loading...</div>}>
        <HashRouter>
          <App />
        </HashRouter>
      </Suspense>
    </Provider>
  </React.StrictMode>,
)
