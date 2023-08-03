import React, {useEffect, useRef} from "react"
import s from "./Divider.module.css"
import {motion, useInView, useAnimation} from "framer-motion"

const DividerGridVertical = () => {

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
            hidden: {height: "0%"},
            visible: {height: "100%"},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className={s.dividerGridVertical}>
        
        </motion.div>
    )

    
};

export default DividerGridVertical;
