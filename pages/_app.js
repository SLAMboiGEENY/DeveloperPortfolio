import '@/styles/globals.css'
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';


function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [customCursor, setCustomCursor] = useState('default');

  setTimeout(() => {
    setLoading(false);
  }, 3800);

  useEffect(() => {
    const mouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });

    window.addEventListener('mousemove', mouseMove);
  }, []);

  const cursorVariants = {
    default: { x: mousePosition.x - 22, y: mousePosition.y - 22 },
    inverse: { x: mousePosition.x - 22, y: mousePosition.y - 22, mixBlendMode: 'difference' },
  };

  const cursorIn = () => setCustomCursor('inverse');
  const cursorOut = () => setCustomCursor('default');

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <div onMouseEnter={cursorIn} onMouseLeave={cursorOut}>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </div>

          <motion.div className="pointer-events-none fixed left-0 top-0 z-50 h-11 w-11 rounded-full bg-primary-light" variants={cursorVariants} animate={customCursor} />
        </div>
      )}
    </>
  );
}

export default MyApp;
