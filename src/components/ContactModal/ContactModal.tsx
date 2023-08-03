import React, { useEffect, useState } from "react"
import s from "./ContactModal.module.css"
import { ReactComponent as Close } from "./assets/close.svg";
import { ReactComponent as Telegram } from "./assets/telegram.svg";
import {motion, useAnimation} from "framer-motion"
import Reveal from "../Reveal/Reveal";


interface Props {
    show: true | false;
    onHide: React.Dispatch<React.SetStateAction<boolean>>;
        
}

const ContactModal = ({show, onHide}: Props) => {

    const [style, setStyle] = useState(`${s.modal} ${s.hidden}`)

    const mainControls = useAnimation()
    useEffect(() => {
            if (show) {
                setStyle(s.modal)
                mainControls.start("visible")
            } else {
                mainControls.start("hidden")
                setTimeout(() => {
                    setStyle(`${s.modal} ${s.hidden}`)
                }, 500)
            }
        }, [show])


    return (
        <motion.div className={style}
        variants={{
            hidden: {opacity: 1, y: "-100%"},
            visible: {opacity: 1, y: 0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.4, delay: 0, ease: "easeOut" }}
        >
        <div className={s.container}>
            <button className={s.closeButton} onClick={() => onHide(false)}><Close /></button>
            <div className={s.content}>
                <div className={s.heading}>
                    <h1>СВЯЗАТЬСЯ</h1>
                    <div className={s.headingButtons}>
                        <a className={s.mailButton}>info@idp.by</a>
                        <a className={s.telegramButton}><Telegram /></a>
                    </div>
                </div>
                Форма
                <button className={s.sendButton} onClick={() => alert('form sent!')}>Отправить</button>
            </div>
        </div>
        </motion.div>
    )
};

export default ContactModal;
