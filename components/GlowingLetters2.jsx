import React from "react";
import { motion } from "framer-motion";

function GlowingLetters2() {
    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
    };

    return (
        <motion.div
            className='h-screen w-screen flex justify-center items-center'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
        >
            <svg
                viewBox='0 0 90 25'
                className='h-full w-full absolute top-0 left-0'
            >
                <defs>
                    <filter id='glow'>
                        <feGaussianBlur stdDeviation='5' result='coloredBlur' />
                        <feMerge>
                            <feMergeNode in='coloredBlur' />
                            <feMergeNode in='SourceGraphic' />
                        </feMerge>
                    </filter>
                </defs>
                <motion.path
                    d='M10,20 L10,5 L20,5 A10,10 0 0,1 20,15 L10,15 M10,10 L15,10 M25,5 L30,5 L30,20 L25,20 M25,10 L30,10 M40,20 L40,5 L50,5 L50,10 Q50,15 55,15 Q60,15 60,10 Q60,5 55,5 L50,5 M65,20 L65,5 L75,5 L75,10 Q75,15 80,15 Q85,15 85,10 Q85,5 80,5 L75,5'
                    fill='#00c965'
                    filter='url(#glow)'
                    initial={{
                        opacity: 0,
                        pathLength: 0,
                    }}
                    animate={{
                        opacity: 1,
                        pathLength: 1,
                        transition: {
                            duration: 1.5,
                        },
                    }}
                />
            </svg>
        </motion.div>
    );
}

export default GlowingLetters2;
