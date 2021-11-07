import React from 'react';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar';
import IdeasSection from './IdeasSection';
import HowItWorksFirst from './HowItWorksFirst';
import HowItWorksSecond from './HowItWorksSecond';
import ReachSection from './ReachSection';
import { ToastProvider } from 'react-toast-notifications';
import Approach from './Approach';
import Banner from './Banner';

const Layout = ({children}) => {
    return (
        <>
        <Navbar/>
        <Banner/>
        <div>
            {children}
        </div>
        <IdeasSection/>
        <HowItWorksFirst/>
        <HowItWorksSecond/>
        <ReachSection/>
        <Approach/>
        <ToastProvider>
        <Contact/>
        </ToastProvider>
        <Footer/>
        </>
    );
};

export default Layout;