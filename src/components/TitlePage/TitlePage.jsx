import { useEffect } from "react";

export default function TitlePage({ title }) {
  useEffect(() => {
    document.title = `One comm' | ${title}`;
  }, []);
}
