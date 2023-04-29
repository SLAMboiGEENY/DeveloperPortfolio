import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { ContentAnimation, FadeAnimation } from '../components/Animations';
import { Skills } from '../lib/Skills';
import Resume from '../components/Resume';

const about = () => {
    return (
        <Layout pageTitle=" | About">
            <section className="relative flex w-full flex-col items-center justify-evenly py-40 md:h-full  md:flex-row md:overflow-hidden">
                <motion.span {...FadeAnimation} className="title-page">
                    ABOUT
                </motion.span>

                <motion.div {...ContentAnimation} className="relative order-2 flex w-3/4 flex-col items-center justify-end md:order-1 md:w-1/3">
                    <div className="my-2 mr-2 flex justify-center items-center text-center text-3xl font-semibold text-primary-light">Skills</div>
                    <div className="flex w-4/5 flex-wrap justify-evenly">
                        {Skills.map((skill) => (
                            <div key={skill.id} className="skills-icon">
                                <svg className="p-2" role="img" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d={skill.svg} />
                                </svg>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div {...ContentAnimation} className="relative order-1 my-10 w-3/4 text-justify md:order-2 md:my-0 md:w-1/4">

                    <h1 className="text-3xl my-5 font-semibold text-primary-light text-center">A little bitty about myself...</h1>
                    <p className="text-md font-light mt-5 text-primary-light">
                        {`Ayoooo! My name is Ebro Lyon and I'm a front-end developer as well as a bike messenger located here in NYC! As of lately my interests primarily consist of riding my bicycle all day then programming all night honing my skills!`}
                    </p>
                    <p className="text-lg font-medium mb-1 mt-5 py-5 text-primary-light">Oh yeah, here's a copy of my current resume as well!</p>
                    <Resume />
                </motion.div>
            </section>
        </Layout>
    );
};   

export default about;