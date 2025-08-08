import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './pages/privacy.jsx';
import Terms from './pages/terms.jsx';
import RefundPolicy from './pages/refunds.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/refunds" element={<RefundPolicy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)