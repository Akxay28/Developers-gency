import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import Routesimport './App.css'
import MainLayout from './Views/Layout/MainLayout'
import Home from './Views/Pages/Home/Home'
import "./index.css"

function App() {


  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
          </Routes>
        </MainLayout>
      </Router>
    </>
  )
}

export default App
