import React from "react";
import Nav from "../components/Nav/Nav";
import Section1 from "../components/Home/Section1";
import Section2 from "../components/Home/Section2";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Section1 />
        <Section2 />
      </main>
    </>
  );
}
