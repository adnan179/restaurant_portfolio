import './App.css';
import { About, Navbar, Home, Footer } from './components';
import Menupage from './components/Menu/Menupage';
import OurMenu from './components/ourmenu/ourmenu';
import { useState } from 'react';
const App = (props) => {
  const [display, setDisplay] = useState(false);
  const handleChange = (display) => {
    setDisplay(display);
  }
  return display ? <Menupage handleChange={handleChange} /> : (
    <div className="App">
      <Navbar handleChange={handleChange} />
      <Home />
      <About />
      <OurMenu handleChange={handleChange} />
      <Footer handleChange={handleChange} />
    </div>
  )
}
export default App;