import Home from "./views/home/home";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Details from "./components/details/details";
import Characters from "./components/characters/characters";
import Films from "./components/films/films";
import Planets from "./components/planets/planets";
import Species from "./components/species/species";
import Starships from "./components/starships/starships";
import Vehicles from "./components/vehicals/vehicles";
import FullInfo from "./components/fullInfo/fullInfo";

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
        <Route path="/films" element={<Films />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/species" element={<Species />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/characters/fullinfo/:id" element={<FullInfo />} />
        <Route path="/planets/fullinfo/:id" element={<FullInfo />} />
        <Route path="/films/fullinfo/:id" element={<FullInfo />} />
        <Route path="/starships/fullinfo/:id" element={<FullInfo />} />
        <Route path="/species/fullinfo/:id" element={<FullInfo />} />
        <Route path="/vehicles/fullinfo/:id" element={<FullInfo />} />
      </Routes>
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
