import Layout from './Layout';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SvgAnimation } from './Animations';
import GlowingLetters2 from './GlowingLetters2';


const LoadingScreen = () => {
    const [show, setShow] = useState(true);
    setTimeout(() => {
        setShow(false);
    }, 1100);


    return (
        <Layout>
            <GlowingLetters2 />
        </Layout>
    );
};

export default LoadingScreen;