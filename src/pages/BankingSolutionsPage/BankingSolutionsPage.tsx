import React, { useState, useEffect, useRef } from "react";
import s from "./BankingSolutionsPage.module.css";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ContactModal from "../../components/ContactModal/ContactModal";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { BurgerMenu } from "../../components/BurgerMenu";
import Reveal from "../../components/Reveal/Reveal";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Divider from "../../components/Divider/Divider";
import Count1 from "./assets/counts1.png";
import Count2 from "./assets/counts2.png";
import Count3 from "./assets/counts3.png";
import Count4 from "./assets/counts4.png";
import sol1 from "./assets/sol1.png";
import sol2 from "./assets/sol2.png";
import sol3 from "./assets/sol3.png";
import sol4 from "./assets/sol4.png";
import sol5 from "./assets/sol5.png";
import sol6 from "./assets/sol6.png";
import sol7 from "./assets/sol7.png";
import otherImage from "./assets/otherImage.png";
import { ReactComponent as RowRight } from './assets/rowRight.svg'
import { Footer } from "../../components/Footer/Footer";

const BankingSolutionsPage = () => {
  const { width } = useWindowDimensions();

  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);

  const options = {
    smooth: true,
    multiplier: 3,
  };
  const scroll = useScroll({
    target: ref,
    offset: ["0 1", "2 0"],
  });

  const secondScroll = useScroll({
    target: secondRef,
    offset: ["0 1", "1 1"],
  });

  const top = useTransform(
    useSpring(scroll.scrollYProgress, {
      stiffness: 200,
      damping: 30,
      restDelta: 0.001,
    }),
    [0, 1],
    ["660px", "300px"]
  );

  const secondTop1 = useTransform(
    useSpring(secondScroll.scrollYProgress, {
      stiffness: 200,
      damping: 30,
      restDelta: 0.001,
    }),
    [0, 1],
    ["68px", "108px"]
  );

  const secondTop2 = useTransform(
    useSpring(secondScroll.scrollYProgress, {
      stiffness: 200,
      damping: 30,
      restDelta: 0.001,
    }),
    [0, 1],
    ["136px", "216px"]
  );

  const secondTop3 = useTransform(
    useSpring(secondScroll.scrollYProgress, {
      stiffness: 200,
      damping: 30,
      restDelta: 0.001,
    }),
    [0, 1],
    ["204px", "324px"]
  );

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && width && width > 500) {
        // if scroll down hide the navbar
        setShowNavbar(false);
      } else {
        // if scroll up show the navbar
        setShowNavbar(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);


  return (
    <div className={s.page}>
      <BurgerMenu
        setIsOpen={setShowBurgerMenu}
        isOpen={showBurgerMenu}
        openContactModal={setShow}
      >
        <div className={s.burgerLinks}>
          <a href="#about" onClick={() => setShowBurgerMenu(false)}>
            О нас
          </a>
          <a href="#cards" onClick={() => setShowBurgerMenu(false)}>
            Отрасли
          </a>
          <a href="#solutions" onClick={() => setShowBurgerMenu(false)}>
            Решения
          </a>
          <a href="#services" onClick={() => setShowBurgerMenu(false)}>
            Услуги
          </a>
        </div>
      </BurgerMenu>
      <ContactModal show={show} onHide={setShow} />
      <div className={`${s.navbar} ${!showNavbar && s.navbarHide}`}>
        <div className={s.navbarContent}>
          <div onClick={() => navigate("/")} className={s.headerLogo}>
            <Logo className={s.logo} />
          </div>
          <Reveal>
            <div className={s.navbarLinks}>
              <a href="#about">О нас</a>
              <a href="#cards">Отрасли</a>
              <a href="#solutions">Решения</a>
              <a href="#services">Услуги</a>
            </div>
          </Reveal>
          <div className={s.phoneButton}>
            <Reveal>
              <div className={s.navbarLinks}>
                <a href="tel:+375297944933">+375 29 794-49-33</a>
              </div>
            </Reveal>
            <button onClick={() => setShow(true)}>Обсудить проект</button>
          </div>
          <button
            className={showBurgerMenu ? `${s.burger} ${s.expanded}` : s.burger}
            onClick={() => {
              setShowBurgerMenu(!showBurgerMenu);
            }}
          >
            <span className={s.bar_1}></span>
            <span className={s.bar_2}></span>
            <span className={s.bar_3}></span>
          </button>
        </div>
      </div>

      <div className={s.hero}>
        <div className={s.container}>
          <div className={s.headingWrapper}>
            <Reveal>
              <h1 className={s.heading}>Решения для банка</h1>
            </Reveal>
            <Reveal>
              <h1 className={s.heading}>по распознованию лиц</h1>
            </Reveal>
          </div>
          <Divider rotation="horizontal" />
        </div>
      </div>

      <motion.div className={s.descriptionBlock} style={{ top: top }} ref={ref}>
        <div className={s.descriptionWrapper}>
          <h1 className={s.description}>
            VisionLabs создает ведущую в мире технологию распознования лиц.
            <br />
            Эти инновации помогут вам создавать лучшие решения в банковской
            сфере и защитят от мошенничества.
          </h1>
        </div>
      </motion.div>

      <div className={s.pageContent}>
        <motion.div className={s.block} ref={secondRef}>
          <div className={s.blockHeadingWrapper}>
            <Divider rotation="horizontal" />
            <Reveal>
              <h1 className={s.blockHeading}>VISIONLABS в цифрах</h1>
            </Reveal>
          </div>
          <div className={s.countsBlock}>
            <div className={s.countsImagesWrapper}>
              <motion.img
                className={s.count1}
                src={Count1}
                style={{ top: 0 }}
              />
              <motion.img
                className={s.count2}
                src={Count2}
                style={{ top: secondTop1 }}
              />
              <motion.img
                className={s.count3}
                src={Count3}
                style={{ top: secondTop2 }}
              />
              <motion.img
                className={s.count4}
                src={Count4}
                style={{ top: secondTop3 }}
              />
            </div>
            <div className={s.countsTextWrapper}>
              <p>
                Мы создаем продукты и комплексные решения в области
                распознавания лиц и объектов, которые внедряют корпоративные и
                государственные компании во всем мире
              </p>
              <div className={s.countsGrid}>
                <div className={s.count}>
                  <Divider rotation="horizontal" />
                  <div className={s.countText}>
                    <Reveal>
                      <h2>11+</h2>
                    </Reveal>
                    <p>Лет на рынке</p>
                  </div>
                </div>
                <div className={s.count}>
                  <Divider rotation="horizontal" />
                  <div className={s.countText}>
                    <Reveal>
                      <h2>60+</h2>
                    </Reveal>
                    <p>Стран, использующих нашу технологию</p>
                  </div>
                </div>
                <div className={s.count}>
                  <Divider rotation="horizontal" />
                  <div className={s.countText}>
                    <Reveal>
                      <h2>1 место</h2>
                    </Reveal>
                    <p>В рейтинге NIST FRVT</p>
                  </div>
                </div>
                <div className={s.count}>
                  <Divider rotation="horizontal" />
                  <div className={s.countText}>
                    <Reveal>
                      <h2>1200+</h2>
                    </Reveal>
                    <p>Компаний, использующих нашу технологию</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className={s.block}>
          <div className={s.blockHeadingWrapper}>
            <Divider rotation="horizontal" />
            <Reveal>
              <h1 className={s.blockHeading}>Ключевые решения</h1>
            </Reveal>
          </div>
          <div className={s.solutionsWrapper}>
            <div className={s.solutionsList}>
              <div className={s.solution}>
                <div className={s.imageWrapper}>
                  <img className={s.solutionImage} src={sol1} />
                </div>
                <div className={s.textRow}>
                  <p>Идентификация и верификация в дистранционных каналах обслуживания</p>
                  <RowRight className={s.rowRight} />
                </div>
                <Divider rotation="horizontal" />
              </div>
              <div className={s.solution}>
                <div className={s.imageWrapper}>
                  <img className={s.solutionImage} src={sol3} />
                </div>
                <div className={s.textRow}>
                  <p>Устройства самообслуживания и системы управления очередями</p>
                  <RowRight className={s.rowRight} />
                </div>
                <Divider rotation="horizontal" />
              </div>
              <div className={s.solution}>
                <div className={s.imageWrapper}>
                  <img className={s.solutionImage} src={sol5} />
                </div>
                <div className={s.textRow}>
                  <p>Идентификация в видеопотоке</p>
                  <RowRight className={s.rowRight} />
                </div>
                <Divider rotation="horizontal" />
              </div>
            </div>

            <div className={s.solutionsList}>
              <div className={s.solution}>
                <div className={s.imageWrapper}>
                  <img className={s.solutionImage} src={sol2} />
                </div>
                <div className={s.textRow}>
                  <p>Защита от мошенничества</p>
                  <RowRight className={s.rowRight} />
                </div>
                <Divider rotation="horizontal" />
              </div>
              <div className={s.solution}>
                <div className={s.imageWrapper}>
                  <img className={s.solutionImage} src={sol4} />
                </div>
                <div className={s.textRow}>
                  <p>Биометрический эквайринг</p>
                  <RowRight className={s.rowRight} />
                </div>
                <Divider rotation="horizontal" />
              </div>
              <div className={s.solution}>
                <div className={s.imageWrapper}>
                  <img className={s.solutionImage} src={sol6} />
                </div>
                <div className={s.textRow}>
                  <p>Боиметрический СКУД</p>
                  <RowRight className={s.rowRight} />
                </div>
                <Divider rotation="horizontal" />
              </div>
              <div className={s.solution}>
                <div className={s.imageWrapper}>
                  <img className={s.solutionImage} src={sol7} />
                </div>
                <div className={s.textRow}>
                  <p>Идентификация в офисах при обслуживании</p>
                  <RowRight className={s.rowRight} />
                </div>
                <Divider rotation="horizontal" />
              </div>
            </div>
          </div>
        </div>
        <div className={s.block}>
          <div className={s.horizontalContent}>
            <div className={s.otherSolutions}>
              <div className={s.otherSolutionsButton}>
                <h1>Другие<br/>решения</h1>
              </div>
            </div>
            <img className={s.otherImage} src={otherImage} />
          </div>
        </div>
        <Footer showModal={setShow}/>
      </div>
    </div>
  );
};

export default BankingSolutionsPage;
