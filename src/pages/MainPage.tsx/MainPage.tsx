import React, {useRef, useState} from "react"
import s from './MainPage.module.css'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as Card1 } from './assets/card1.svg'
import { ReactComponent as Card2 } from './assets/card2.svg'
import { ReactComponent as Card3 } from './assets/card3.svg'
import { ReactComponent as Card4 } from './assets/card4.svg'
import { ReactComponent as Card5 } from './assets/card5.svg'
import { ReactComponent as ScrollAnimated } from './assets/scrollAnimated.svg'
import Img1 from './assets/img1.png'
import Img2 from './assets/img2.png'
import Img3 from './assets/img3.png'
import Img4 from './assets/img4.png'
import Img5 from './assets/img5.png'
import { ReactComponent as Sol1 } from './assets/sol1.svg'
import { ReactComponent as Sol2 } from './assets/sol2.svg'
import { ReactComponent as Sol3 } from './assets/sol3.svg'
import { ReactComponent as Sol4 } from './assets/sol4.svg'
import { ReactComponent as Ser1 } from './assets/ser1.svg'
import { ReactComponent as Ser2 } from './assets/ser2.svg'
import { ReactComponent as RowIcon } from './assets/rowIcon.svg'
import Reveal from "../../components/Reveal/Reveal"
import RevealSlide from "../../components/RevealSlide/RevealSlide"
import {motion, useScroll, useTransform, useSpring} from "framer-motion"
import Divider from "../../components/Divider/Divider"
import DividerGridVertical from "../../components/Divider/DividerGridVertical"
import DividerGridHorizontal from "../../components/Divider/DividerGridHorizontal"
import ContactModal from "../../components/ContactModal/ContactModal"
 
const MainPage = () => {

    const ref = useRef<HTMLDivElement>(null)
    const secondRef = useRef<HTMLDivElement>(null)
    const scrollingContainer = useRef<HTMLDivElement>(null)

    const [show, setShow] = useState(false)

    const options = {
        smooth: true,
        multiplier: 3,
    }

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "4 1"]
    })

    const scroll = useScroll({
        target: secondRef,
        offset: ["0 1", "2 1"]
    })


    const margin = useTransform(useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 30,
        restDelta: 0.001
      }), [0, 1], ["0px", "-630px"])

    const right = useTransform(useSpring(scroll.scrollYProgress, {
        stiffness: 60,
        damping: 30,
        restDelta: 0.001
      }), [0, 1], ["0px", "-800px"])

    return (
        <div className={s.page} ref={scrollingContainer}>
            <ContactModal show={show} onHide={setShow} />
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
                    <button onClick={() => setShow(true)}>Связаться</button>
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

            <div className={s.darkContainer}>
                <div className={s.darkBlock}>
                    <div className={s.headingLines}>
                        <Divider rotation="horizontal" />
                        <Reveal>
                            <h1 className={s.headingInLines}>/* НАШИ</h1>
                        </Reveal>
                        <Divider rotation="horizontal" />
                    </div>
                    
                    <motion.div className={s.imagesWrapper} ref={ref}
                    style={{ marginLeft: margin}} >
                        <img className={s.image} src={Img1} />
                        <img className={s.image} src={Img2} />
                        <img className={s.image} src={Img3} />
                        <img className={s.image} src={Img4} />
                        <img className={s.image} src={Img5} />
                    </motion.div>

                    <div className={s.headingLines} style={{alignItems: "end"}}>
                        <Divider rotation="horizontal" />
                        <Reveal>
                            <h1 className={s.headingInLines}>Решения */</h1>
                        </Reveal>
                        <Divider rotation="horizontal" />
                    </div>

                    <div className={s.solutionsGrid}>
                        <Reveal>
                            <div className={s.solution}>
                                <Sol1 className={s.solutionImage} />
                                <h2>решения для банка<br/>по распознаванию лиц</h2>
                            </div>
                        </Reveal>
                        <DividerGridVertical />
                        <Reveal>
                            <div className={s.solution}>
                                <Sol2 className={s.solutionImage} />
                                <h2>единая биометрическая<br/>платформа</h2>
                            </div>
                        </Reveal>
                        <DividerGridHorizontal />
                        <Reveal>
                            <div className={s.solution}>
                                <Sol3 className={s.solutionImage} />
                                <h2>маркетинговая<br/>аналитика в ритейле</h2>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className={s.solution}>
                                <Sol4 className={s.solutionImage} />
                                <h2>цифровизация<br/>городского траспорта</h2>
                            </div>
                        </Reveal>
                    </div>

                    <button className={s.fullWidthButton}>Все решения</button>
                </div>
            </div>

            <div className={s.greenContainer}>
                <div className={s.greenBlock}>
                    <h1>
                    мы разрабатываем
                    сверхкачественные
                    решения, способные
                    выдержать любую
                    нагрузку
                    </h1>

                    <div className={s.alignRight}>
                        <p>
                        Наши специалисты используют<br/>
                        самые актуальные технологии<br/>
                        и методики разработки<br/>
                        </p>
                    </div>
                </div>
                <motion.div ref={secondRef} className={s.scrollWrapper} style={{right: right}}>
                    <ScrollAnimated className={s.scrollAnimated} />
                </motion.div>
            </div>

            <div className={s.darkContainer}>
                <div className={s.darkBlock}>
                    <div className={s.servicesHeading}>
                        <div className={s.headingWrapper}>
                            <Reveal>
                                <h1 className={s.headingInLines}>НАШИ</h1>
                            </Reveal>
                            <Reveal>
                                <h1 className={s.headingInLines}>УСЛУГИ</h1>
                            </Reveal>
                        </div>
                        <div className={s.servicesVideoWrapper}>
                            <video className={s.servicesVideo} autoPlay={true} loop={true} controls={false} playsInline muted>
                                <source src={require('./assets/servicesVideo.mp4')} data-wf-ignore="true" type="video/mp4" />
                            </video>
                        </div>
                    </div>

                    <div className={s.alignRight}>
                        <p className={s.servicesText}>Мы разрабатываем программное обеспечение для широкого спектра устройств и наделяем их инстинктами</p>
                    </div>

                    <div className={s.services}>
                        <div className={s.service}>
                            <Ser1 />
                            <div className={s.serviceText}>
                                <h3>Разработка<br/>программного обеспечения</h3>
                                <p>Мы не только разрабатываем ПО, но и обучаем его самоорганизовывать сети, вовремя передавать данные и реагировать на изменения окружающей среды. Мы умеем собирать данные, анализировать, предсказывать аномалии и знаем, как настроить искусственный интеллект работать на благо вашей цели.</p>
                            </div>
                        </div>
                        <div className={s.service}>
                            <Ser2 />
                            <div className={s.serviceText}>
                                <h3>Приложения для<br/>мобильных платформ</h3>
                                <p>Мы создаем индивидуальные программные решения для смартфонов, планшетов и других мобильных устройств с современным и эффективным UX/UI.</p>
                            </div>
                        </div>
                    </div>

                    <button className={s.fullWidthButton}>Связаться с нами</button>
                </div>
            </div>
            
        </div>
        
    )
};

export default MainPage;
