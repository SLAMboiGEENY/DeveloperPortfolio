import React from 'react'
import { socialData } from '../lib/Socials';

const SocialGrid = () => {
    return (
        <footer className="bg-primary-dark py-8">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex text-primary-lightjustify-center space-x-6">
                    {socialData.map((icon) => (
                        <a 
                            key={socialData.title}
                            href={socialData.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="sr-only">{socialData.title}</span>
                            {socialData.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};   

export default SocialGrid;