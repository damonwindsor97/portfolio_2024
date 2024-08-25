import { Routes, Route } from 'react-router-dom'
import './App.css'

import Layout from './layout/Layout.jsx'

import Home from './pages/Home'

function App() {


  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" index element={<Home/>}/>

      </Route>
    </Routes>
  )
}

export default App
