import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Contact from "./pages/Contact";
import GraphicDesign from "./pages/GraphicDesign";
import ObjetsPublicitaires from "./pages/ObjetsPublicitaires";
import Blog from "./pages/Blog";
import Actualites from "./pages/Actualites";

function App() {
  const Contacts = {
    adress: "7 rue de la création",
    commune: "92100 Boulogne-Billancourt",
    mail: "contact@one-comm.com",
    tel: "06.74.52.72.00",
  };

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graphicDesign" element={<GraphicDesign />} />
        <Route path="/objetsPublicitaires" element={<ObjetsPublicitaires />} />
        <Route path="/contact" element={<Contact Contacts={Contacts} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/actualites" element={<Actualites />} />
      </Routes>
      <Footer Contacts={Contacts} />
    </>
  );
}

export default App;
