import './App.css';
import BridgeOne from './components/BridgeOne/BridgeOne';
import BridgeTwo from './components/BridgeTwo/BridgeTwo';
import LightMode from './components/CrogeNFTs/LightMode/LightMode';
import HomePage from './components/HomePage/HomePage';
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
          <BrowserRouter>
         <Routes>
           <Route exact to="/" element={<BridgeOne/>} />
           <Route exact to="/bridgetwo" element={<BridgeTwo/>} />
           <Route exact to="/homepage" element={<HomePage/>} />
           <Route exact to="/lightmode" element={<LightMode/>} />
           <Route exact to="/darkmode" element={<DarkMode/>} />
         </Routes>
         </BrowserRouter>

    </div>
  );
}

export default App;
