import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
//Importando React Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Player from './Componentes/Player';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Router>
      <Routes>
      <Route path='/' element={<App />} />
      
      </Routes>
    </Router>
  </React.StrictMode>,
)
