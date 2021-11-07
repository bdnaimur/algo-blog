import React from 'react';
import approachImage from '../assets/images/circle.jpeg'
import  Image  from 'next/image';
import  Fade  from 'react-reveal/Fade';
const Approach = () => {
    return (
        <div className="w-10/12 py-6 mx-auto">
            <div className="text-center mb-16">
                <h3 className="text-2xl font-bold py-4">
                    Our Approach
                </h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has <br/> been the industry's standard dummy text ever since the 1500s
                </p>
            </div>
            <div className="relative -z-10 text-center">
                <Image className="mx-auto animate-spin-slow "
                    src={approachImage}
                    alt="Picture of the circle"
                    width={500}
                    height={500}
                />
                <Fade top duration={2500} distance="40px">
                <div className="m-auto absolute top-0 right-0 bottom-0 left-0 text-gray-700 text-xl md:text-3xl font-bold w-56 h-32 text-center">Extraordinary work transformation, by design</div>
                </Fade>
            </div>
        </div>
    );
};

export default Approach;