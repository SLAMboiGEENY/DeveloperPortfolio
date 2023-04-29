import React from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { ContentAnimation, FadeAnimation, CardHomeAnimation } from '../components/Animations';




function HomePage() {
  return (
    <Layout>
      <section className="relative flex w-full h-full flex-col items-center justify-evenly py-40 md:h-screen md:flex-row md:overflow-hidden">
        <motion.span {...FadeAnimation} className="title-page">
          Ebro
        </motion.span>

        <motion.div {...ContentAnimation} className="relative ordeellr-2 flex w-1/2 justify-end md:order-1 md:w-1/3">
          <motion.div {...CardHomeAnimation} animate={{ rotate: -12 }} className="card-home absolute bg-[#464646]" />
          <motion.div {...CardHomeAnimation} animate={{ rotate: -3 }} className="card-home absolute bg-secondary-light" />
          <motion.div {...CardHomeAnimation} animate={{ rotate: 2 }} className="card-home relative bg-primary-light">
            <motion.div {...FadeAnimation} className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl">
              <Image src="/assets/myself.png" priority layout="intrinsic" width={600} height={600} alt="ebro lyon" className="relative" />  
            </motion.div>  
          </motion.div>
        </motion.div>

        <motion.div {...ContentAnimation} className="relative order-1 w-1/3 md:order-2">
          <h3 className="mt-5 text-center text-base font-normal">Hey there I am</h3>
          <h1 className="-ml-1 mb-1 text-7xl font-bold text-primary-light">ebro</h1>
          <h4 className="text-sm  text-center font-light mt-5 transition-all duration-500 hover:text-primary-light">Front-End Developer</h4>
          <h4 className="text-sm text-center mt-2 font-light text-primary-light">/</h4>
          <h4 className="text-sm mt-2 text-center font-light text-primary-light">Bike Messenger</h4>
        </motion.div>
      </section>
    </Layout>
  );
};



export default HomePage;