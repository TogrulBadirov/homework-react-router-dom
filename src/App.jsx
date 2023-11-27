import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import MainLayout from './layout/MainLayout'
import Gallery from './pages/Gallery'
import ShortCodes from './pages/ShortCodes'
import Languages from './pages/Languages'
import PageMarkup from './pages/PageMarkup'
import ContactForm from './pages/ContactForm'
import PageImage from './pages/PageImage'
import ClearingFloats from './pages/ClearingFloats'
import PageComments from './pages/PageComments'
import DisabledComments from './pages/DisabledComments'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="shortCodes" element={<ShortCodes />} />
          <Route path="languages" element={<Languages />} />
          <Route path="pageMarkup" element={<PageMarkup />} />
          <Route path="contactForm" element={<ContactForm />} />
          <Route path="pageImage" element={<PageImage />} />
          <Route path="clearingFloats" element={<ClearingFloats />} />
          <Route path="pageComments" element={<PageComments />} />
          <Route path="disabledComments" element={<DisabledComments />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
