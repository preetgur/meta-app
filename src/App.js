import './App.css';
import BridgeOne from './components/BridgeOne/BridgeOne';
import BridgeTwo from './components/BridgeTwo/BridgeTwo';
import LightMode from './components/CrogeNFTs/LightMode/LightMode';
import HomePage from './components/HomePage/HomePage';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import DarkMode from './components/CrogeNFTs/DarkMode/DarkMode';
function App() {
  return (
    <div className="App">
          <BrowserRouter>
         <Routes>
           <Route exact path="/" element={<BridgeOne/>} />
           <Route exact path="/bridgetwo" element={<BridgeTwo/>} />
           <Route exact path="/homepage" element={<HomePage/>} />
           <Route exact path="/lightmode" element={<LightMode/>} />
           <Route exact path="/darkmode" element={<DarkMode/>} />
         </Routes>
         </BrowserRouter>

    </div>
  );
}

export default App;
