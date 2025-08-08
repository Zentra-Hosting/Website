import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Terms from './pages/terms.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
)