import SocialGrid from '../components/SocialGrid';
import React from 'react'

const contact = () => {
    return (
        <footer aria-label="Site Footer" className="bg-primary-dark">
            <div className="mx-auto max-w-screen-5xl px-4 pb-8 pt-32 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-center items-center max-w-screen-5xl">
                    <strong className="flex mt-5 justify-center items-center text-center text-2xl font-bold text-primary-light sm:text-3xl">
                        Want in on all the latest news, trending media, and overall hype?
                    </strong>
                    

                    {/* form time */}
                    <form action="" className="mt-6">
                        <div className="relative max-w-lg">
                            <label htmlFor="email" className="sr-only"> Email </label>

                            <input 
                                className="w-full rounded-full border-emerald-500 bg-primary-light p-4 pe-32 font-medium"
                                id="email"
                                type="email"
                                placeholder="johndoe@gmail.com"
                            />

                            <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-emerald-500 py-3 px-5 text-sm font-medium text-primary-light transition-colors duration-500 hover:bg-orange-600">Subscribe</button>
                        </div>
                    </form>

                    <div className="block mt-10 text-center text-xl font-semibold text-primary-light sm:text-2xl">Then sign up for our weekly newsletter to stay in the know all.</div>

                    <SocialGrid />
                </div>
            </div>
        </footer>
    );
};   

export default contact;