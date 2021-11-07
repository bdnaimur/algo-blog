import React, { useState } from 'react';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';

const HowItWorksSecond = () => {
    const [services, setServices] = useState(true);
    const [benifites, setBenifites] = useState(false);
    const [comunity, setcomunity] = useState(false);
    const [grow, setGrow] = useState(false);
    const handleService = e => {
        setBenifites(false)
        setServices(true)
        setcomunity(false)
        setGrow(false)
    }
    const handleBenifites = e => {
        setBenifites(true)
        setServices(false)
        setcomunity(false)
        setGrow(false)
    }
    const handleComunity = e => {
        setBenifites(false)
        setServices(false)
        setcomunity(true)
        setGrow(false)
    }
    const handleGrow = e => {
        setBenifites(false)
        setServices(false)
        setcomunity(false)
        setGrow(true)
    }
    return (
        <div className="w-10/12 mx-auto my-6">
            <h3 className="text-center text-2xl my-6">How it works</h3>
            <div className=" md:flex">
                <div className={`w-12/10 bg-gray-100 border-t-2 border-b-2 border-l-2 md:w-4/12 rounded`}>
                    <div onClick={handleService} className={`border-b-2 p-5 hover:bg-white text-xl cursor-pointer ${services && `border-l-4 border-blue-400 text-blue-600`}`}>Services</div>
                    <div onClick={handleBenifites} className={`border-b-2 p-5 hover:bg-white text-xl cursor-pointer ${benifites && `border-l-4 border-blue-400 text-blue-600`}`}>Benifites</div>
                    <div onClick={handleComunity} className={`border-b-2 p-5 hover:bg-white text-xl cursor-pointer ${comunity && `border-l-4 border-blue-400 text-blue-600`}`}>Comunity</div>
                    <div onClick={handleGrow} className={`border-b-2 p-5 hover:bg-white text-xl cursor-pointer ${grow && `border-l-4 border-blue-400 text-blue-600`}`}>Grow</div>
                </div>

                {
                    services &&
                    <div className="pt-5 pl-8 md:w-7/12">
                        <Fade duration={2500}>
                            <p className="text-xl font-bold">Access unlisted work opportunities with top brands & employers
                            </p>
                            <br />
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual. Lorem ipsum dolor sit amet,</p>
                            <br />
                            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <br />
                            <Link href="/">
                                <a >Download our services brochure</a>
                            </Link>
                        </Fade>
                    </div>
                }
                {
                    benifites &&
                    <div className="pt-5 pl-8 md:w-7/12">
                        <Fade duration={2500}>
                            <p className="text-xl font-bold">Benefitss
                            </p>
                            <br />
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual. Lorem ipsum dolor sit amet,</p>
                            <br />
                            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <br />
                            <Link href="/">
                                <a >Download our services brochure</a>
                            </Link>
                        </Fade>
                    </div>
                }
                {
                    comunity &&
                    <div className="pt-5 pl-8 md:w-7/12">
                        <Fade duration={2500}>
                            <p className="text-xl font-bold">Community
                            </p>
                            <br />
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual. Lorem ipsum dolor sit amet,</p>
                            <br />
                            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <br />
                            <Link href="/">
                                <a >Download our services brochure</a>
                            </Link>
                        </Fade>
                    </div>
                }
                {
                    grow &&
                    <div className="pt-5 pl-8 md:w-7/12">
                        <Fade duration={2500}>
                            <p className="text-xl font-bold">Grow
                            </p>
                            <br />
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual. Lorem ipsum dolor sit amet,</p>
                            <br />
                            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <br />
                            <Link href="/">
                                <a >Download our services brochure</a>
                            </Link>
                        </Fade>
                    </div>
                }
            </div>
        </div>
    );
};

export default HowItWorksSecond;