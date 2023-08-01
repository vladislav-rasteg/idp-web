import React from "react"
import s from './MainPage.module.css'
import { ReactComponent as Logo } from '../../assets/logo.svg' 
import { ReactComponent as Card1 } from './assets/card1.svg' 
import { ReactComponent as Card2 } from './assets/card2.svg' 
import { ReactComponent as Card3 } from './assets/card3.svg' 
import { ReactComponent as Card4 } from './assets/card4.svg' 
import { ReactComponent as Card5 } from './assets/card5.svg' 
import { ReactComponent as RowIcon } from './assets/rowIcon.svg' 
import Reveal from "../../components/Reveal/Reveal"
import RevealSlide from "../../components/RevealSlide/RevealSlide"
import {motion} from "framer-motion"

const MainPage = () => {
  return (
    <div className={s.page}>
        <div className={s.navbar}>
            <div className={s.navbarContent}>
                <Logo className={s.logo} />
                <Reveal>
                    <div className={s.navbarLinks}>
                        <a>О нас</a>
                        <a>Отрасли</a>
                        <a>Решения</a>
                        <a>Услуги</a>
                    </div>
                </Reveal>
                <button>Связаться</button>
            </div>
        </div>
        <div className={s.container}>
        </div>

        <div className={s.container}>
            <div className={s.hero}>
                <div className={s.headingWrapper}>
                    <Reveal>
                        <h1 className={s.heading}>Цифровые решения</h1>
                    </Reveal>
                    <Reveal>
                        <h1 className={s.heading}>для бизнеса и государства</h1>
                    </Reveal> 
                </div>
                
                <motion.div 
                initial={{opacity: 0, width: "0px"}}
                animate={{opacity: 1, width: "1290px"}}
                transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
                className={s.videoWrapper}>
                    <video className={s.heroVideo} autoPlay={true} loop={true} controls={false} playsInline muted>
                        <source src={require('./assets/heroVideo.mp4')} data-wf-ignore="true" type="video/mp4" />
                    </video>
                </motion.div>
            </div>
        </div>

        <div className={s.container}>
            <div className={s.block}>
                <Reveal>
                    <h1 className={s.heading}>О нас</h1>
                </Reveal>
                
                <Reveal>
                    <p>Надежный партнер для вашего инновационного пути.<br/>
                    Являясь глобальным поставщиком инженерных, технологических 
                    и консалтинговых услуг, компания Expleo занимает идеальное
                    положение для того, чтобы помочь вам реализовать свои
                    амбиции и обеспечить будущее вашего бизнеса.</p>
                </Reveal>
            </div>
        </div>

        <div className={s.container}>
            <div className={s.block}>
                <Reveal>
                    <h1 className={s.heading}>Отрасли</h1>
                </Reveal>
                
                <div className={s.cards}>
                    <Reveal>
                        <div className={s.card}>
                            <div className={s.cardContent}>
                                <Card1 />
                                <h2>банковский<br/>и финансовый<br/>сектор</h2>
                            </div>
                            <div className={s.moreWrapper}>
                                <p>Подробнее</p>
                                <RowIcon />
                            </div>    
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={s.card}>
                            <div className={s.cardContent}>
                                <Card2 />
                                <h2>государственный<br/>сектор</h2>
                            </div>
                            <div className={s.moreWrapper}>
                                <p>Подробнее</p>
                                <RowIcon />
                            </div>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={s.card}>
                            <div className={s.cardContent}>
                                <Card3 />
                                <h2>транспортная<br/>и дорожная<br/>инфраструктура</h2>
                            </div>
                            <div className={s.moreWrapper}>
                                <p>Подробнее</p>
                                <RowIcon />
                            </div>    
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={s.card}>
                            <div className={s.cardContent}>
                                <Card4 />
                                <h2>здравоохранение</h2>
                            </div>
                            <div className={s.moreWrapper}>
                                <p>Подробнее</p>
                                <RowIcon />
                            </div>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={s.card}>
                            <div className={s.cardContent}>
                                <Card5 />
                                <h2>ритейл</h2>
                            </div>
                            <div className={s.moreWrapper}>
                                <p>Подробнее</p>
                                <RowIcon />
                            </div>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={s.blancCard}>
                            <p>Более 42 проектов от сельского хозяйства до космических аппаратов</p>
                        </div>
                    </Reveal>
                    
                </div>
            </div>
        </div>
        
    </div>
    
  )
};

export default MainPage;
