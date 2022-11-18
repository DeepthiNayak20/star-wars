import Home from "./views/home/home";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Details from "./components/details/details";
import Characters from "./components/characters/characters";

function App() {
  return (
    <div className="App">
      <div className="headerContainer">
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Details />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
