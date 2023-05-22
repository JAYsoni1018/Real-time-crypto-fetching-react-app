import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Coin from "./components/Coin";
import CoinDetail from "./components/CoinDetail";
import Exchanges from "./components/Exchanges";
function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coin" element={<Coin/>}/>
        <Route path="/exchange" element={<Exchanges/>}/>
        <Route path="/coin/:id" element={<CoinDetail/>}/>

      </Routes>
    </Router>
    </>
  );
}

export default App;
