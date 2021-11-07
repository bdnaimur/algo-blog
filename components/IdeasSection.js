import React, { useState } from 'react';
import  Fade  from 'react-reveal/Fade';

const IdeasSection = () => {
    const [visible1, setVisible1] = useState(true)
    const [visible2, setVisible2] = useState(false)
    const [visible3, setVisible3] = useState(false)

    const handleClick1 = e =>{
        setVisible1(true)
        setVisible2(false)
        setVisible3(false)
    }
    const handleClick2 = e =>{
        setVisible1(false)
        setVisible2(true)
        setVisible3(false)
    }
    const handleClick3 = e =>{
        setVisible1(false)
        setVisible2(false)
        setVisible3(true)
    }
    return (
        <div className=" w-10/12 md:flex items-center my-6 mx-auto shadow-inner bg-green-50">
            {visible1 && 
            <div className="w-12/10 md:w-2/3 my-6 p-6">
                        <Fade duration={2500}>
                <h3 className="font-bold text-2xl">
                Ideas to action every project.
                </h3>
                <p className="mt-4 text-justify">
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual.Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor.
                </p>
                </Fade>
            </div>}
            {visible2 && 
            <div className="w-2/3 my-6 p-6">
                        <Fade duration={2500}>

                <h3 className="font-bold text-2xl">
                Connect.
                </h3>
                <p className="mt-4 text-justify">
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual.Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </p>
                </Fade>
            </div>}
            {visible3 && 
            <div className="w-2/3 my-6 p-6">
                        <Fade duration={2500}>

                <h3 className="font-bold text-2xl">
                e-Governance
                </h3>
                <p className="mt-4 text-justify">
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual.Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor.,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor.
                </p>
                </Fade>
            </div>}
            <div className="mx-auto my-6 px-3 pb-5 text-center md:text-left">
                <div onClick={handleClick1} className={` ${visible1 && `transform ease-out duration-500 py-2 px-3 border-l-4 border-blue-500 rounded bg-gradient-to-r from-blue-300 to-green-300 font-bold`}`} >1. Mind Maps</div>
                <div onClick={handleClick2} className={visible2 && `transform ease-out duration-500 py-2 px-3 border-l-4 border-blue-500 rounded bg-gradient-to-r from-blue-300 to-green-300 font-bold`}>2. Connect</div>
                <div onClick={handleClick3} className={visible3 && `transform ease-out duration-500 py-2 px-3 border-l-4 border-blue-500 rounded bg-gradient-to-r from-blue-300 to-green-300 font-bold`}>3. E-Governance</div>
            </div>
        </div>
    );
};

export default IdeasSection;