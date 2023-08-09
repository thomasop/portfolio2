import styles from "./Overlay.module.scss";
import { FormControlLabel, Switch } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { useSelector } from "react-redux";

export function Overlay({ scroll }) {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const arrayPictures = [
    "argentbank.png",
    "billed.png",
    "fisheye.png",
    "gameon.png",
    "hrnet.png",
    "kasa.png",
    "lespetitsplats.png",
    "sportsee.png",
  ];
  const [index, setIndex] = useState(0);
  //const [type, setType] = useState("js");
  const [selected, setSelected] = useState(false);
  console.log(theme);
  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: "999",
        }}
      >
        <FormControlLabel
          value="top"
          control={
            <Switch
              color="primary"
              onChange={() =>
                dispatch({
                  type: "theme/changeTheme",
                })
              }
            />
          }
          label="Theme"
          labelPlacement="top"
        />
      </div>
      <div
        className={styles.overlay}
        onScroll={(e) => {
          const scroll01 =
            e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
          scroll.current = scroll01;
        }}
      >
        <section className={styles.overlay__sectionHero}>
          <header>
            <h1
              className={`${
                theme === "light"
                  ? styles.overlay__sectionHero__h1__light
                  : styles.overlay__sectionHero__h1__dark
              }`}
            >
              <strong>Portfolio Thomas DA SILVA</strong>
            </h1>

            <nav>
              <Link
                to="#aboutme"
                className={`${
                  theme === "light"
                    ? styles.overlay__sectionHero__selected__light
                    : styles.overlay__sectionHero__selected__dark
                }`}
                onClick={() => {
                  document
                    .getElementById("aboutme")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                / A propos de moi
              </Link>
              <Link
                href="#"
                className={`${
                  theme === "light"
                    ? styles.overlay__sectionHero__selected__light
                    : styles.overlay__sectionHero__selected__dark
                }`}
              >
                / Mes projets
              </Link>
            </nav>
          </header>
          <p
            className={`${
              theme === "light"
                ? styles.overlay__sectionHero__p__light
                : styles.overlay__sectionHero__p__dark
            }`}
          >
            Développeur front-end.
            <br />
            Scroll cette page pour me découvrir!
          </p>
          <p>
            <svg
              width="30"
              height="71"
              viewBox="0 0 30 71"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1.5"
                y="1.5"
                width="27"
                height="45"
                rx="13.5"
                stroke={`${theme === "light" ? "black" : "white"}`}
                stroke-opacity="0.6"
                stroke-width="3"
              />
              <path
                d="M15 12V20"
                stroke={`${theme === "light" ? "black" : "white"}`}
                stroke-opacity="0.6"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M8 54L14.5 60.5L21 54"
                stroke={`${theme === "light" ? "black" : "white"}`}
                stroke-opacity="0.6"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 63L14.5 69.5L21 63"
                stroke={`${theme === "light" ? "black" : "white"}`}
                stroke-opacity="0.6"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </p>
        </section>
        <section
          style={{ height: "100vh" }}
          className={styles.overlay__sectionAbout}
        >
          <p id="aboutme">
            My name is Max.
            <br />
            As you can see I like plants,
            <br />
            design, and coffee.
          </p>
        </section>
        <section
          style={{ height: "100vh" }}
          className={styles.overlay__sectionSkills}
        >
          <p>
            In my free time
            <br />
            I like to code and
            <br />
            make 3D designs with Spline!
          </p>
        </section>
        <section className={styles.overlay__sectionWork}>
          <h1>My work</h1>
          <div>
            <select
              name=""
              id=""
              onChange={(e) => {
                //setType(e.target.value);
              }}
            >
              <option>Type de projet</option>
              <option value="php">Openclassroom PHP/Symfony</option>
              <option value="js">Openclassroom JS/React</option>
              <option value="Personnel">Personnel</option>
              <option value="Professionnel">Professionnel</option>
            </select>
          </div>
          <div>
            <p className={styles.overlay__sectionWork__carrousel}>
              <Tilt
                className={styles.overlay__sectionWork__carrousel__tilt}
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.1}
              >
                {selected === false && (
                  <img
                    className={`${
                      styles.overlay__sectionWork__carrousel__tilt__img
                    } ${
                      theme === "light"
                        ? styles.overlay__sectionWork__carrousel__tilt__img__light
                        : styles.overlay__sectionWork__carrousel__tilt__img__dark
                    }`}
                    onClick={() => {
                      setSelected(true);
                    }}
                    src={`../assets/img/${arrayPictures[index]}`}
                    alt=""
                  />
                )}
                {selected === true && (
                  <div
                    className={`${
                      styles.overlay__sectionWork__detail__div__open
                    } ${
                      theme === "light"
                        ? styles.overlay__sectionWork__carrousel__tilt__img__light
                        : styles.overlay__sectionWork__carrousel__tilt__img__dark
                    }`}
                  >
                    close
                  </div>
                )}
              </Tilt>
            </p>

            {/* {selected === true && (
              <p>
                <div className={styles.overlay__sectionWork__detail__div__open}>
                  close
                </div>
              </p>
            )}
            {selected === false && (
              <p>
                <div
                  className={styles.overlay__sectionWork__detail__div__close}
                >
                  open
                </div>
              </p>
            )} */}
          </div>

          <div>
            <button
              onClick={() => {
                if (selected === true) {
                  setSelected(false);
                }
                if (index > 0) {
                  setIndex(index - 1);
                } else {
                  setIndex(arrayPictures.length - 1);
                }
              }}
            >
              Précédent
            </button>
            <span>
              {index + 1} / {arrayPictures.length}
            </span>
            <button
              onClick={() => {
                if (selected === true) {
                  setSelected(false);
                }
                if (index < arrayPictures.length - 1) {
                  setIndex(index + 1);
                } else {
                  setIndex(0);
                }
              }}
            >
              Suivant
            </button>
          </div>
        </section>
        <section
          style={{ height: "100vh" }}
          className={styles.overlay__sectionContact}
        >
          <p id="aboutme">
            My name is Max.
            <br />
            As you can see I like plants,
            <br />
            design, and coffee.
          </p>
        </section>
      </div>
    </>
  );
}
