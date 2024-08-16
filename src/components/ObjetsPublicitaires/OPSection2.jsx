import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

export default function OPSection2() {
  return (
    <section className="OPSection2">
      <NavOP />
      <div className="img">IMAGES</div>
      <Categories />
      <Tendance />
      <AvisClients />
    </section>
  );
}

function NavOP() {
  function Left() {
    const Links = [
      { name: "Express 24 / 48h", href: "/" },
      { name: "Goodies écologiques", href: "/" },
      { name: "Made in France", href: "/" },
      { name: "Tous nos goodies", href: "/" },
    ];

    function ModalMenu() {
      const Links = [
        { name: "Express 24 / 48h", href: "/" },
        { name: "Hight-Tech", href: "/" },
        { name: "Drinkwear", href: "/" },
        { name: "écriture", href: "/" },
        { name: "Tote Bag", href: "/" },
        { name: "Goodies écologiques", href: "/" },
        { name: "Textiles et accessoires", href: "/" },
        { name: "Gastronomie / Maison", href: "/" },
        { name: "Accessoires smartphone", href: "/" },
        { name: "Outils / Bricolage", href: "/" },
        { name: "Sacs et bagagerie", href: "/" },
        { name: "Signalétique et packaging", href: "/" },
        { name: "Articles de poche", href: "/" },
        { name: "Sport et loisirs", href: "/" },
        { name: "Hygiène beauté et santé", href: "/" },
        { name: "Parapluies", href: "/" },
      ];

      return (
        <div className="modalMenu">
          {Links.map((link, i) => {
            return (
              <NavLink key={i} to={link.href}>
                {link.name}
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
            <NavLink key={i} to={link.href}>
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

function Categories() {
  const categories = [
    "express",
    "informatique",
    "textile",
    "cuisine",
    "todbag",
    "écologie",
    "mugs",
    "carnet",
    "electronique",
    "outils",
    "valises",
    "panneaux",
    "porte clé",
    "sport",
    "soins",
    "parapluie",
  ];

  return (
    <div className="categoriesSection">
      <h1>Nos catégories d'objets publicitaires</h1>
      <div className="categoriesContainer">
        {categories.map((categorie, i) => {
          return (
            <div key={i} className="categorie">
              {categorie}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Tendance() {
  const bestSellers = [
    {
      image: "/",
      categorie: "super",
      ref: "ref.1304",
      name: "Tote bag en polycoton",
      weight: "150gr",
      price: "7,56€",
    },
    {
      image: "/",
      categorie: "Courbevoie",
      ref: "ref.009",
      name: "Marteau rouge",
      weight: "2kg",
      price: "4€",
    },
    {
      image: "/",
      categorie: "super",
      ref: "ref.1304",
      name: "Tote bag en polycoton",
      weight: "150gr",
      price: "7,56€",
    },
    {
      image: "/",
      categorie: "Courbevoie",
      ref: "ref.009",
      name: "Marteau rouge",
      weight: "2kg",
      price: "4€",
    },
    {
      image: "/",
      categorie: "super",
      ref: "ref.1304",
      name: "Tote bag en polycoton",
      weight: "150gr",
      price: "7,56€",
    },
    {
      image: "/",
      categorie: "Courbevoie",
      ref: "ref.009",
      name: "Marteau rouge",
      weight: "2kg",
      price: "4€",
    },
    {
      image: "/",
      categorie: "super",
      ref: "ref.1304",
      name: "Tote bag en polycoton",
      weight: "150gr",
      price: "7,56€",
    },
    {
      image: "/",
      categorie: "Courbevoie",
      ref: "ref.009",
      name: "Marteau rouge",
      weight: "2kg",
      price: "4€",
    },
  ];

  const [currentItems, setCurrentItems] = useState(0);

  // setInterval(() => {
  //   setCurrentItems(currentItems + 1);
  // }, 3000);

  useEffect(() => {
    if (currentItems < 0) {
      setCurrentItems(bestSellers.length - 4);
    } else if (currentItems - 1 == bestSellers.length - 4) {
      setCurrentItems(0);
    }
  }, [currentItems]);

  function Cards({ currentItems, bestSellers }) {
    return (
      <div className="bestSellerContainer">
        {bestSellers.map((bestSeller, i) => {
          return (
            <div
              key={i}
              style={{
                transform: `translateX(calc(${-100 * currentItems}% - ${
                  20 * currentItems
                }px))`,
              }}
              className="bestSeller"
            >
              <div className="image">IMAGE</div>
              <div className="infos">
                <div className="categorie">{bestSeller.categorie}</div>
                <div className="ref">{bestSeller.ref}</div>
                <div className="footContainer">
                  <div className="nameContainer">
                    <p>{bestSeller.name}</p>
                    <p>{bestSeller.weight}</p>
                  </div>
                  <div className="price">
                    <p>dès</p>
                    <p>{bestSeller.price}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="tendance">
      <h1>Tendances du moment</h1>
      <div className="carroussel">
        <FontAwesomeIcon
          onClick={() => setCurrentItems(currentItems - 1)}
          icon={faChevronLeft}
        />
        <Cards currentItems={currentItems} bestSellers={bestSellers} />
        <FontAwesomeIcon
          onClick={() => setCurrentItems(currentItems + 1)}
          icon={faChevronRight}
        />
      </div>
    </div>
  );
}

function AvisClients() {
  function AvisCards() {
    function StarRating({ rating }) {
      const maxRating = [1, 2, 3, 4, 5];

      return (
        <div className="starRating-container">
          {maxRating.map((value, index) =>
            rating >= value ? (
              <span key={index}>
                <FontAwesomeIcon icon={faStar} style={{ color: "#11235a" }} />
              </span>
            ) : (
              <span key={index}>
                <FontAwesomeIcon icon={faStar} style={{ color: "#9bb0c1" }} />
              </span>
            )
          )}
        </div>
      );
    }

    const Avis = [
      {
        photo: "/vite.svg",
        name: "Joe Dalton",
        avis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ea delectus tenetur modi obcaecati sapiente et, vel vitae cupiditate maxime commodi rem aliquid quidem libero placeat incidunt ratione perspiciatis! Delectus.",
        note: 3,
      },
      {
        photo: "/vite.svg",
        name: "Wilhelm",
        avis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ea delectus tenetur modi obcaecati sapiente et, vel vitae cupiditate maxime commodi rem aliquid quidem libero placeat incidunt ratione perspiciatis! Delectus.",
        note: 5,
      },
      {
        photo: "/vite.svg",
        name: "Joe Dalton",
        avis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ea delectus tenetur modi obcaecati sapiente et, vel vitae cupiditate maxime commodi rem aliquid quidem libero placeat incidunt ratione perspiciatis! Delectus.",
        note: 3,
      },
      {
        photo: "/vite.svg",
        name: "Aldween",
        avis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ea delectus tenetur modi obcaecati sapiente et, vel vitae cupiditate maxime commodi rem aliquid quidem libero placeat incidunt ratione perspiciatis! Delectus.",
        note: 3,
      },
      {
        photo: "/vite.svg",
        name: "Joe Dalton",
        avis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ea delectus tenetur modi obcaecati sapiente et, vel vitae cupiditate maxime commodi rem aliquid quidem libero placeat incidunt ratione perspiciatis! Delectus.",
        note: 2,
      },
    ];

    return (
      <>
        {Avis.map((a, i) => {
          return (
            <div key={i} className="avisCard">
              <div>
                <img src={a.photo} alt="photo du client" />
                <p>{a.name}</p>
              </div>

              <div>
                <StarRating rating={a.note} />

                <span className="txt">{a.avis}</span>
              </div>
            </div>
          );
        })}
      </>
    );
  }

  return (
    <div className="AvisClients">
      <h1>Nos avis clients</h1>
      <div className="containerAvis">
        <AvisCards />
      </div>
    </div>
  );
}
