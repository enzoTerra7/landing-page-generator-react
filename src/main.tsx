import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import { HomePage } from './pages/Home'
import { Theme } from './styles/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <HomePage />
    </ThemeProvider>
  </React.StrictMode>
)
