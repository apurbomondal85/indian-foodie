
import { Button, Footer, TextInput } from 'flowbite-react';
import React from 'react'
import { FaFacebook, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footers() {
    return (
        <Footer className='mt-8'>
            <div className="w-full">
                <div className="grid w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
                    <div>
                        <h1 className='text-3xl text-slate-800 font-bold'>INDIAN FOODIE</h1>
                        <p className='text-slate-500 mt-3'>Welcome to our Indian recipe website!<span className='hidden lg:inline'> Explore the flavors of India with our extensive collection of mouth-watering recipes.</span></p>
                    </div>
                    <div>
                        <Footer.Title title="Explore" />
                        <Footer.LinkGroup col={true}>
                            <Footer.Link>
                                <Link to="/">Recipes</Link>
                            </Footer.Link>
                            <Footer.Link>
                                <Link to="/">Fitness</Link>
                            </Footer.Link>
                            <Footer.Link>
                                <Link to="/">Healthy Living</Link>
                            </Footer.Link>
                            <Footer.Link>
                                <Link to="/">Blog</Link>
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="legal" />
                        <Footer.LinkGroup col={true}>
                            <Footer.Link>
                                <Link to="/">Privacy Policy</Link>
                            </Footer.Link>
                            <Footer.Link>
                                <Link to="/">Licensing</Link>
                            </Footer.Link>
                            <Footer.Link>
                                <Link to="/">Terms & Conditions</Link>
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="Subscribe Now" />
                        <Footer.LinkGroup col={true}>
                            <div className='flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-0'>
                                <input type="text" className="block w-full py-3 px-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500" placeholder='Subscribe....' />
                                <Button className='py-1 lg:-ms-3'>Subscribe</Button>
                            </div>
                        </Footer.LinkGroup>
                    </div>
                </div>
                <div className="w-full bg-gray-700 py-6 px-4 sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        by="Apurbo Mondal"
                        year={2023}
                    />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon
                            href="#"
                            icon={FaFacebook}
                        />
                        <Footer.Icon
                            href="#"
                            icon={FaInstagram}
                        />
                        <Footer.Icon
                            href="#"
                            icon={FaGithub}
                        />
                        <Footer.Icon
                            href="#"
                            icon={FaTwitter}
                        />
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default Footers
