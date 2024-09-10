import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import categories from "../../assets/categories.json";
import NavOP from "./NavOP";

export default function OPSection2() {
  return (
    <section className="OPSection2">
      <NavOP />
      <Carrousel />
      <Categories />
      <Tendance />
      <AvisClients />
    </section>
  );
}

function Carrousel() {
  const images = [
    "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1643409/pexels-photo-1643409.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const [position, setPosition] = useState("-4");

  function Dot({ setCurrentImage, i, setPosition }) {
    function handleClick(e) {
      setCurrentImage(parseInt(e.target.dataset.id));
      setPosition(ref.current.offsetLeft - 4);
    }

    const ref = useRef(null);

    return (
      <div
        ref={ref}
        className="dot"
        data-id={i}
        onClick={(e) => handleClick(e)}
      ></div>
    );
  }

  useEffect(() => {
    currentImage >= images.length && setCurrentImage(0);

    setInterval(() => {
      setCurrentImage(currentImage + 1);
    }, 3000);
  });

  return (
    <div className="CarrouselContainer">
      <div className="filter" />
      {images.map((img, i) => {
        return (
          <img
            key={i}
            src={img}
            alt={`image ${i + 1}`}
            style={{ transform: `translateX(${-100 * currentImage}%)` }}
          />
        );
      })}
      <div className="dotContainer">
        <div className="border" style={{ left: `${position}px` }} />
        {images.map((_, i) => {
          return (
            <Dot
              key={i}
              setCurrentImage={setCurrentImage}
              i={i}
              setPosition={setPosition}
            />
          );
        })}
      </div>
    </div>
  );
}

function Categories() {
  return (
    <div className="categoriesSection">
      <h1>Nos catégories d'objets publicitaires</h1>
      <div className="categoriesContainer">
        {categories.map((cate, i) => {
          return (
            <NavLink
              key={i}
              to={`/objetsPublicitaires/${cate.href}`}
              className="categorie"
              style={{ backgroundImage: `URL(${cate.image})` }}
            >
              {cate.title}
            </NavLink>
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
                <FontAwesomeIcon icon={faStar} style={{ color: "#9bb0c180" }} />
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
