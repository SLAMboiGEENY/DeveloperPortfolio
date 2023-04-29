import React from 'react'

const Resume = () => {
    return (
        <section className="bg-primary-dark py-5">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
               

                <div className="text-center">
                    <a 
                        href="https://github.com/SLAMboiGEENY/Resume/blob/main/Resume%20_%20CV%202023.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        button className="btn py-1 px-5 rounded-full bg-emerald-500 text-center hover:bg-orange-600 focus:outline-none text-primary-light text-2xl font-Rubik transition-colors duration-500"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Resume;