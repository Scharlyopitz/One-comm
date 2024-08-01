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
  };

  useEffect(() => {
    document.title = `One comm' | ${Pages[pathname]}`;
  }, [pathname]);
}
