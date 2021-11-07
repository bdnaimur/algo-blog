import React, { useState } from 'react';
import { FaRegClock } from 'react-icons/fa';
import globalReach from '../assets/images/global-reach.jpeg'
import internationalImage from '../assets/images/interNational.jpg'
import nationalImage from '../assets/images/national.jpg'
import localImage from '../assets/images/local.jpg'
import Image from 'next/image'
import  Fade  from 'react-reveal/Fade';
const ReachSection = () => {
    const [global, setGlobal] = useState(true)
    const [international, setInternational] = useState(false)
    const [national, setNational] = useState(false)
    const [local, setLocal] = useState(false)

    const globalHandle = e => {
        setGlobal(true)
        setInternational(false)
        setNational(false)
        setLocal(false)
    }
    const internationalHandle = e => {
        setGlobal(false)
        setInternational(true)
        setNational(false)
        setLocal(false)
    }
    const nationalHandle = e => {
        setGlobal(false)
        setInternational(false)
        setNational(true)
        setLocal(false)
    }
    const localhandle = e => {
        setGlobal(false)
        setInternational(false)
        setNational(false)
        setLocal(true)
    }
    return (
        <div className="w-10/12 mx-auto py-6">
            <div className={`${global && `border-blue-400`} ${international && `border-red-400`} ${national && ` border-yellow-400`} ${local && `border-green-400`} border-b-4 text-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center py-6`}>
                <div onClick={globalHandle} className={`hover:text-blue-600 cursor-pointer ${global && `animate-bounce text-blue-400`}`}>
                    <FaRegClock className="mx-auto mb-2" />
                    <div> Global Reach</div>
                </div>
                <div onClick={internationalHandle} className={`hover:text-blue-600 cursor-pointer ${international && `animate-bounce text-red-400`}`}>
                    <FaRegClock className="mx-auto mb-2" />
                    <div> International Reach</div>
                </div>
                <div onClick={nationalHandle} className={`hover:text-blue-600 cursor-pointer ${national && `animate-bounce  text-yellow-400`}`}>
                    <FaRegClock className="mx-auto mb-2" />
                    <div> National Reach</div>
                </div>
                <div onClick={localhandle} className={`hover:text-blue-600 cursor-pointer ${local && `animate-bounce text-green-400`}`}>
                    <FaRegClock className="mx-auto mb-2" />
                    <div> Local Reach</div>
                </div>
            </div>
            {global &&
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <Fade left duration={2500} distance="40px">
                        <div>
                            <Image
                                src={globalReach}
                                alt="Picture of the author"
                                width={600}
                                height={500}
                            />
                        </div>
                    </Fade>
                    <Fade duration={2500} >
                    <div className="my-auto">
                        <h3 className="text-2xl py-3 mb-2">
                            <span className="border-b-4 border-blue-300"> Global Reach</span>
                        </h3>
                        <p className="text-justify text-xl">
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </p>
                    </div>
                    </Fade>
                </div>}
            {international &&
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <Fade right duration={2500} distance="40px">
                    <div className="p-5">
                        <Image
                            src={internationalImage}
                            alt="Picture of the author"
                            width={600}
                            height={500}
                        />
                    </div>
                    </Fade>
                    <Fade  duration={2500} >
                    <div className="my-auto">
                        <h3 className="text-2xl py-3">
                            <span className="border-b-4 border-red-300"> Global Reach</span>
                        </h3>
                        <p className="text-justify text-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius faucibus sem ut accumsan. Vestibulum euismod quis quam condimentum varius. Nam pulvinar, libero a bibendum vehicula, ante turpis vehicula ipsum, a iaculis velit ligula vel tortor. Ut eleifend pretium felis eu tincidunt. Nulla semper enim id interdum consequat. Donec eget enim vitae ligula maximus molestie ac ut dolor. Vestibulum odio arcu, congue id libero iaculis, tristique pulvinar quam.
                        </p>
                    </div>
                    </Fade>
                </div>}
            {national &&
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <Fade top duration={2500} distance="40px">
                    <div className="p-5">
                        <Image
                            src={nationalImage}
                            alt="Picture of the author"
                            width={600}
                            height={500}
                        />
                    </div>
                    </Fade>
                    <Fade  duration={2500} >
                    <div className="my-auto">
                        <h3 className="text-2xl py-3">
                            <span className="border-b-4 border-yellow-300"> Global Reach</span>
                        </h3>
                        <p className="text-justify text-xl">
                            Fusce non lorem et massa volutpat mollis hendrerit vel sem. Aenean arcu orci, aliquam iaculis dapibus eget, mollis ut justo. Praesent mauris mi, elementum in nulla ut, vulputate pretium erat. Quisque vitae justo a nisl tincidunt maximus et at mauris. Cras semper sem in est vehicula, eu rhoncus justo convallis.
                        </p>
                    </div>
                    </Fade>
                </div>}
            {local &&
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <Fade bottom duration={2500} distance="40px">
                    <div className="p-5">
                        <Image
                            src={localImage}
                            alt="Picture of the author"
                            width={600}
                            height={500}
                        />
                    </div>
                    </Fade>
                    <Fade duration={2500}>
                    <div className="my-auto">
                        <h3 className="text-2xl py-3">
                            <span className="border-b-4 border-green-300"> Global Reach</span>
                        </h3>
                        <p className="text-justify text-xl">
                            Suspendisse pulvinar velit neque, vitae laoreet elit vestibulum ac. Quisque convallis faucibus cursus. Quisque risus ante, efficitur quis vehicula ut, consequat non eros. Sed luctus ultricies purus at tincidunt. Maecenas condimentum convallis libero, quis vulputate velit sollicitudin ut.
                        </p>
                    </div>
                    </Fade>
                </div>}
        </div>
    );
};

export default ReachSection;