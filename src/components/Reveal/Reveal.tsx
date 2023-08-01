import React, {useRef, useEffect, useState} from "react"
import {motion, useInView, useAnimation} from "framer-motion"
import s from './Reveal.module.css'

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

const Reveal = ({children, width = "fit-content"}: Props) => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const [style, setStyle] = useState(`${s.relative} ${s.hidden}`)

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
            setTimeout(() => {
                setStyle(`${s.relative}`)
            }, 750)
        }
    }, [isInView])

    return (
        <div ref={ref} style={{width}} className={style}>
        <motion.div
        variants={{
            hidden: {opacity: 0, y: "100%"},
            visible: {opacity: 1, y: 0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        >{children}</motion.div>
        </div>
    )
};

export default Reveal;
