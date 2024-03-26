import './App.css';
import Contact from './Components/Contact';
import Homepage from './Components/Homepage';
import Layout from './Components/Layout';
import Routing from './Components/Routing';
import Signup from './Components/Signup/Signup';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './Components/About';

function App() {
  return (
    <div className="App">
      {/* <Routing/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
