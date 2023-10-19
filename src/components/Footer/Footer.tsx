import React from "react";
import s from "./Footer.module.css"
import Reveal from "../Reveal/Reveal";
import { ReactComponent as FooterLogo } from './assets/footerLogo.svg'

interface FooterProps {
    showModal: any
}

export const Footer = ({showModal}:FooterProps) => {
    return(
      <div className={s.footer}>
        <div className={s.footerContainer}>
          <Reveal>
              <h1 onClick={() => showModal(true)} >Связаться с нами</h1>
          </Reveal>
          <div className={s.footerContent}>
              <FooterLogo className={s.footerLogo} />
              <div className={s.footerLinks}>
                  <a href="tel:+375297944933">+375 29 794-49-33</a>
                  <a href="mailto:info@idp.by">info@idp.by</a>
              </div>
              <div className={s.footerLinks}>
                  <a href="#about">О нас</a>
                  <a href="#cards">Отрасли</a>
                  <a href="#solutions">Решения</a>
                  <a href="#services">Услуги</a>
              </div>
          </div>
          </div>
      </div>
    )
}