import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Contact from "./pages/Contact";
import GraphicDesign from "./pages/GraphicDesign";

function App() {
  const adress = "7 rue de la création";

  const commune = "92100 Boulogne-Billancourt";

  const mail = "contact@one-comm.com";

  const tel = "06.74.52.72.00";

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graphicDesign" element={<GraphicDesign />} />
        <Route
          path="/contact"
          element={
            <Contact adress={adress} commune={commune} mail={mail} tel={tel} />
          }
        />
      </Routes>
      <Footer adress={adress} commune={commune} mail={mail} tel={tel} />
    </>
  );
}

export default App;
