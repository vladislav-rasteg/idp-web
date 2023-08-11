import React, { FC } from "react";
import cls from "./BurgerMenu.module.css"
import { classNames } from "../../../shared/lib/classNames/classNames";
import { ReactComponent as Close } from "./assets/close.svg";

interface BurgerMenuProps {
    isOpen: boolean;
    setIsOpen: any;
    openContactModal: any;
}

export const BurgerMenu: FC<React.PropsWithChildren<BurgerMenuProps>> = ({children, openContactModal, isOpen, setIsOpen}) => {
  
  return(
    <div className={classNames(cls.BurgerMenu, {[cls.opened]: isOpen}, [])}>
        <button onClick={() => setIsOpen(false)} className={cls.closeButton}><Close className={cls.closeIcon}/></button>
        <div className={cls.navigationWrapper}>
            <p>Навигация</p>
            <div className={cls.navigation}>
                {children}
            </div>
            
        </div>

        <button onClick={() => openContactModal(true)} className={cls.contactButton}>Обсудить проект</button>
      
    </div>
 )
}
