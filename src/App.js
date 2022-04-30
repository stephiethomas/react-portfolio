
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
// import Work from './components/Work';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <main className="home">
        <Header />
        <div>
          <Routes>
            <Route exact path={"/"}>
              <About />
            </Route>
            <Route exact path={"/contact"}>
              <Contact />
            </Route>
            <Route exact path={"/resume"}>
              <Resume />
            </Route>
          </Routes>
        </div>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
