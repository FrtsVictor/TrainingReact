import React from 'react' //sempre primeira linha pra usar o jsx
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles/global'
import Routes from './routes';

//import Dashboard from './pages/Dashboard';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </>
  )
}

export default App