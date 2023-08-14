import React, { useEffect, useState } from "react"
import s from "./ContactModal.module.css"
import { ReactComponent as Close } from "./assets/close.svg";
import { ReactComponent as Telegram } from "./assets/telegram.svg";
import {motion, useAnimation} from "framer-motion"
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import useWindowDimensions from "../../hooks/useWindowDimensions";


interface Props {
    show: true | false;
    onHide: React.Dispatch<React.SetStateAction<boolean>>;
        
}

const ContactModal = ({show, onHide}: Props) => {
    const [contactName, setContactName] = useState("")
    const [contactCompany, setContactCompany] = useState("")
    const [contactContact, setContactContact] = useState("")
    const [contactMessage, setContactMessage] = useState("")
    const [contactError, setContactError] = useState("")
    const [contactSuccess, setContactSuccess] = useState("")

    const { height, width } = useWindowDimensions();

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


    const contactFormHandler = async () => {
        if(contactName && contactCompany && contactContact && contactMessage){
            setContactError("")
            setContactSuccess("Спасибо, мы свяжемся с вами как можно скорее")
            try {
                const response = await axios.post('https://api.clycon.com/api/landing/IDPcontact', {contactName, contactCompany, contactContact, contactMessage});
                console.log(response);
            } catch (err) {
                console.log(err)
            }
        }
        else{
            setContactError("Пожалуйста, заполните все поля")
            setContactSuccess("")
        }
    }

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
                {
                    width && width > 500
                    ?
                    <button className={s.closeButton} onClick={() => onHide(false)}><Close /></button>
                    :
                    <div className={s.mobileButtons}>
                        <button className={s.closeButton} onClick={() => onHide(false)}><Close /></button>
                        <div className={s.mobileButtonsRow}>
                            <a href="mailto:info@idp.by" className={s.mailButton}>info@idp.by</a>
                            <a href="https://t.me/ais4lifecom" target="_blank" className={s.telegramButton}><Telegram className={s.tgIcon} /></a>
                        </div>
                        
                    </div>

                }
                
                <div className={s.contentWrapper}>
                    <div className={s.content}>
                        <div className={s.heading}>
                            <h1>СВЯЗАТЬСЯ</h1>
                        </div>
                        <Form id="contactForm" className={s.contactForm}>
                            <Form.Control value={contactName} onChange={(e) => {setContactName(e.target.value)}} className={s.contactInput} placeholder="Ваше имя" />
                            <Form.Control value={contactCompany} onChange={(e) => {setContactCompany(e.target.value)}} className={s.contactInput} type="phone" placeholder="Компания" />
                            <Form.Control value={contactContact} onChange={(e) => {setContactContact(e.target.value)}} className={s.contactInput} type="mail" placeholder="Telegram, почта или телефон" />
                            <Form.Control value={contactMessage} onChange={(e) => {setContactMessage(e.target.value)}} className={s.contactInput} placeholder="Опишите вашу задачу" />
                            {contactSuccess && <p className={s.successContact} >{contactSuccess}</p>}
                            {contactError && <p className={s.errorContact} >{contactError}</p>}
                        </Form>
                        <button className={s.sendButton} onClick={contactFormHandler}>Отправить</button>
                    </div>
                    <div className={s.contactButtons}>
                        <div className={s.buttonsRow}>
                                    <a href="mailto:info@idp.by" className={s.mailButton}>info@idp.by</a>
                                    <a href="https://t.me/ais4lifecom" target="_blank" className={s.telegramButton}><Telegram /></a>
                        </div>
                        <a href="tel:+375297944933" className={s.phoneButton}>+375 29 794-49-33</a>
                        <a href="https://yandex.ru/maps/-/C-bVUjB" target="_blank" className={s.addressButton}>Минск Проспект Победителей 7А, 9 этаж, офис 22</a>
                    </div>
                                     
                </div>
            </div>
        </motion.div>
    )
};

export default ContactModal;