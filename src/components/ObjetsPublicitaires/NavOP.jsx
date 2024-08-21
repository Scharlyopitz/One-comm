import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import categories from "../../assets/categories.json";

export default function NavOP() {
  function Left() {
    const Links = [
      { name: "Express 24 / 48h", href: "/Express" },
      { name: "Goodies écologiques", href: "/Goodies-ecologiques" },
      { name: "Made in France", href: "/Made-In-France" },
      { name: "Tous nos goodies", href: "/Goodies" },
    ];

    function ModalMenu() {
      return (
        <div className="modalMenu">
          {categories.map((cate, i) => {
            return (
              <NavLink key={i} to={`/objetsPublicitaires/${cate.href}`}>
                {cate.title}
              </NavLink>
            );
          })}
        </div>
      );
    }

    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
      const body = document.querySelector("body");

      openModal ? body.classList.add("b") : body.classList.remove("b");
    }, [openModal]);

    return (
      <div className="left">
        <div onClick={() => setOpenModal(!openModal)} className="Menu">
          {openModal && (
            <>
              <div
                onClick={() => setOpenModal(!openModal)}
                className="background"
              />{" "}
              <ModalMenu />
            </>
          )}
          <div className="burgerContainer">
            <div className="burger" />
          </div>
          <p>Menu</p>
        </div>
        {Links.map((link, i) => {
          return (
            <NavLink key={i} to={`/objetsPublicitaires${link.href}`}>
              {link.name}
            </NavLink>
          );
        })}
      </div>
    );
  }

  function Right() {
    const items = [
      { name: "Tote Bag", qte: "115" },
      { name: "Set de table", qte: "30" },
      { name: "Carnet en liège", qte: "80" },
      { name: "Support de téléphone", qte: "55" },
    ];

    function ModalDevis({ items }) {
      const ref = useRef(null);

      const [height, setHeigh] = useState();

      const numberOfItems = 4;

      useEffect(() => {
        setHeigh(ref.current.clientHeight);
      });

      return (
        <div className="modalDevis">
          <div className="header">
            <p>Nombre du produit</p>
            <p>Qte</p>
          </div>
          <div
            style={{
              maxHeight: `calc(${height * numberOfItems}px + ${
                1 * numberOfItems
              }vh)`,
              overflowY: items.length > numberOfItems && "scroll",
            }}
            className="itemsContainer"
          >
            {items.map((item, i) => {
              return (
                <div ref={ref} key={i} className="item">
                  <p>{item.name}</p>
                  <p>{item.qte}</p>
                  <button className="deleteBtn">x</button>
                </div>
              );
            })}
          </div>
          <button className="devisBtn">Demander mon devis</button>
        </div>
      );
    }

    const [open, setOpen] = useState(false);

    const [width, setWidth] = useState();

    const button = useRef(null);

    useEffect(() => {
      const body = document.querySelector("body");

      open ? body.classList.add("b") : body.classList.remove("b");

      function Resize() {
        setWidth(button.current.clientWidth);
      }
      Resize();
      window.addEventListener("resize", Resize);
      return () => window.removeEventListener("resize", Resize);
    });

    return (
      <div className="right">
        <input type="text" placeholder="Que recherchez-vous ?" />
        <div className="devis">
          {open && (
            <>
              <div style={{ width }} className="lien">
                <div></div>
              </div>
              <div onClick={() => setOpen(!open)} className="background" />
              <ModalDevis items={items} />
            </>
          )}

          <button className="btn" ref={button} onClick={() => setOpen(!open)}>
            Mon devis
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="navContainer">
      <div className="nav">
        <Left />
        <Right />
      </div>
    </div>
  );
}
