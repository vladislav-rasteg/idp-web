import React, {useEffect, useRef} from "react"
import s from "./Divider.module.css"
import {motion, useInView, useAnimation} from "framer-motion"

const DividerGridHorizontal = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const mainControls = useAnimation()

    useEffect(() => {
            if (isInView) {
                mainControls.start("visible")
            }
        }, [isInView])

    return (
        <motion.div 
        ref={ref} 
        variants={{
            hidden: {width: "0%"},
            visible: {width: "100%"},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className={s.dividerGridHorizontal}>
        
        </motion.div>
    )

    
};

export default DividerGridHorizontal;
