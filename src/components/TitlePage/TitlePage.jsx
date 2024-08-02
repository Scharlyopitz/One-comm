import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function TitlePage() {
  const { pathname } = useLocation();

  const Pages = {
    "/contact": "Contact",
    "/": "Accueil",
    "/graphicDesign": "Graphic Design",
    "/objetsPublicitaires": "Objets Publicitaires",
    "/actualites": "Actualités",
    "/blog": "Blog",
    "/mentionsLegales": "Mentions Légales",
    "/politiqueDeConfidentialite": "Politique De Confidentialité",
    "/conditionsGenerales": "Conditions générales",
  };

  useEffect(() => {
    document.title = `One comm' | ${Pages[pathname]}`;
  }, [pathname]);
}
