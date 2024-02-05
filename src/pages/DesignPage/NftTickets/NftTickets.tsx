import { useNavigate } from 'react-router-dom';
import s from '../DesignPage.module.css'
import { useEffect, useState } from 'react';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { BurgerMenu } from '../../../components/BurgerMenu';
import ContactModal from '../../../components/ContactModal/ContactModal';
import Reveal from '../../../components/Reveal/Reveal';
import { ReactComponent as Logo } from "../../../assets/logo.svg";


export const NftTickets = () => {
    
    const [show, setShow] = useState(false);
    const { width } = useWindowDimensions();
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showBurgerMenu, setShowBurgerMenu] = useState(false);
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

    const navigate = useNavigate()

    useEffect(() => {
        if (typeof window !== "undefined") {
        window.addEventListener("scroll", controlNavbar);

        // cleanup function
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
        }
    }, [lastScrollY]);

    const images = require.context('./assets', true);
    const imageList = images.keys().map((image: any) => images(image));

    return(
        <div className={s.page_wrapper}>
            <BurgerMenu
                setIsOpen={setShowBurgerMenu}
                isOpen={showBurgerMenu}
                openContactModal={setShow}
            >
                <div className={s.burgerLinks}>
                <a onClick={() => {navigate('/#about')}}>
                    О нас
                </a>
                <a onClick={() => {navigate('/#cards')}}>
                    Отрасли
                </a>
                <a onClick={() => {navigate('/#solutions')}}>
                    Решения
                </a>
                <a onClick={() => {navigate('/#services')}}>
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
                    <a onClick={() => {navigate('/#about')}}>
                        О нас
                    </a>
                    <a onClick={() => {navigate('/#cards')}}>
                        Отрасли
                    </a>
                    <a onClick={() => {navigate('/#solutions')}}>
                        Решения
                    </a>
                    <a onClick={() => {navigate('/#services')}}>
                        Услуги
                    </a>
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
            
            <div className={s.back_button_wrapper}>
                <a className={s.back_button} onClick={() => {navigate('/design')}}>Назад</a>
            </div>
            <div className={s.case_container}>
                {imageList.map((image: any, index: number) => (
                    <img key={index} src={image} alt={`image-${index}`} />
                ))}
            </div>
        </div>
    )
    }
