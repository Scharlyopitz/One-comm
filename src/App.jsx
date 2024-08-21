import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Contact from "./pages/Contact";
import GraphicDesign from "./pages/GraphicDesign";
import ObjetsPublicitaires from "./pages/ObjetsPublicitaires";
import Blog from "./pages/Blog";
import Actualites from "./pages/Actualites";
import { useEffect } from "react";
import TitlePage from "./components/TitlePage/TitlePage";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueDeConfidentialité from "./pages/PolitiqueDeConfidentialité";
import ConditionsGenerales from "./pages/ConditionsGenerales";
import Categorie from "./pages/Categorie";
import Error from "./pages/Error";

function App() {
  const Contacts = {
    adress: "7 rue de la création",
    commune: "92100 Boulogne-Billancourt",
    mail: "contact@one-comm.com",
    tel: "06.74.52.72.00",
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Nav />
      <TitlePage />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/graphicDesign" element={<GraphicDesign />} />
        <Route path="/objetsPublicitaires" element={<ObjetsPublicitaires />} />
        <Route path="/contact" element={<Contact Contacts={Contacts} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/actualites" element={<Actualites />} />
        <Route path="/mentionsLegales" element={<MentionsLegales />} />
        <Route path="/conditionsGenerales" element={<ConditionsGenerales />} />
        <Route
          path="/politiqueDeConfidentialite"
          element={<PolitiqueDeConfidentialité />}
        />
        <Route path="/objetsPublicitaires/:categorie" element={<Categorie />} />
      </Routes>
      <Footer Contacts={Contacts} />
    </>
  );
}

export default App;
