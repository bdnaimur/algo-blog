import React from 'react';
import styles from '../styles/Home.module.css'
const Banner = () => {
    return (
        <div className="mb-6">
            <div className={`${styles.backgroundImage} flex items-center text-white`}>
                <div className="px-12">
                    <h4 className="text-2xl text-naimur py-4">services & benefits</h4>
                    <h2 className="text-5xl py-4">
                        The future of <br /> hiring
                    </h2>
                    <p className="py-4">Lorem ipsum dolor sit amet,consectetur adipisicing <br/>elit,sed do eiusmod tempor.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;