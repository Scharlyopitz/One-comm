import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function TitlePage({ title }) {
  const { pathname } = useLocation();
  console.log(pathname);

  pathname == "actualités" && console.log("ok");

  useEffect(() => {
    document.title = `One comm' | ${title}`;
  }, []);
}
