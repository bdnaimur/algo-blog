import React from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

const HowItWorksFirst = () => {
    return (
        <div className="my-6">
            <div className="text-center">
                <h3 className="font-bold text-2xl">How It Works</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ben <br/> the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <div className="text-center my-8 mx-auto w-10/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-6">
                <div className="bg-algo1 py-16 px-8 rounded">
                    <h3 className="text-2xl mb-4">Apply</h3>
                    <p className="text-left">
                    Contact Edge and let’s discuss your project needs
                    </p>
                    <div className="flex mt-4 cursor-pointer">
                    <FaRegArrowAltCircleRight/>
                    <span className="-mt-1 ml-3">More Info</span>
                    </div>

                </div>
                <div className="bg-algo2 py-16 px-8 rounded">
                    <h3 className="text-2xl mb-4">Get Approved</h3>
                    <p className="text-left">
                    Select the freelancer you want to work with
                    </p>
                    <div className="flex mt-4 cursor-pointer">
                    <FaRegArrowAltCircleRight/>
                    <span className="-mt-1 ml-3">More Info</span>
                    </div>
                </div>
                <div className="bg-algo3 py-16 px-8 rounded">
                    <h3 className="text-2xl mb-4">Pay</h3>
                    <p className="text-left">
                    Agree project milestones deliverable & payment
                    </p>
                    <div className="flex mt-4 cursor-pointer">
                    <FaRegArrowAltCircleRight/>
                    <span className="-mt-1 ml-3">More Info</span>
                    </div>
                </div>
                <div className="bg-algo4 py-16 px-8 rounded">
                    <h3 className="text-2xl mb-4">Starts</h3>
                    <p className="text-left">
                    Keep your project on track & communicate with ease
                    </p>
                    <div className="flex mt-4 cursor-pointer">
                    <FaRegArrowAltCircleRight/>
                    <span className="-mt-1 ml-3">More Info</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-center cursor-pointer">
            <FaRegArrowAltCircleRight/>
            <span className="-mt-1 ml-3">
                Got a question on compliance?
                </span>
            </div>
        </div>
    );
};

export default HowItWorksFirst;