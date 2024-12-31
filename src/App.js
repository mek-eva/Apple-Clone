

// import logo from './logo.svg';

import './App.css';
import Header from './components/Header/Header';

import Footer from './components/Footer/Footer';


// import "..commonResource/js/custom.js";
import "./commonResource/js/custom.js"

import Iphone from './Pages/Iphone/iphone.js'
import Mac from './Pages/Mac/Mac.js';
import Ipad from './Pages/Ipad/Ipad.js';
import Tv from './Pages/Tv/Tv.js';
import Wacth from "./Pages/Wacth/Wacth.js";
import Cart from './Pages/Cart/Cart.js';
import Support from './Pages/Support/Support.js';
import Music from './Pages/Music/Music.js';

// import YoutubeVideos from "./components/YoutubeVideos/YoutubeVideos.js";

import Main from './components/Main/Main.js';
import { Route, Routes } from 'react-router-dom';
import Four04 from './Pages/Four04/Four04.js';

import  Productpage from './Pages/Productpage/Productpage.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/Mac" element={<Mac />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route path="/watch" element={<Wacth />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/music" element={<Music />} />
        <Route path="/support" element={<Support />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Four04 />} />

        <Route path="/iphone/:pid" element={<Productpage />} />
      </Routes>

      {/* <Iphone /> */}
      {/* <Mac /> */}

      <Footer />
    </div>
  );
}

export default App;
