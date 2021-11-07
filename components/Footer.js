import { GoMail } from "react-icons/go";
import { MdLocationOn } from "react-icons/md";
import { RiArrowDownSFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import ScrollTop from './ScrollTop';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font bg-green-100 ">
            <div className="py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 w-10/12 mx-auto">
                <div>
                    <div className="mx-auto">
                        <Link href="/">
                            <a>
                            <Image className=""
                                src="https://i.ibb.co/h7VShM7/world-globe.png"
                                alt="Picture of the circle"
                                width={125}
                                height={125}
                            />
                            </a>
                        </Link>
                    </div>
                    <div className="flex text-4xl py-7 text-red-500 -ml-6">
                        <a href="https://facebook.com"><FaFacebookSquare /></a>
                        <a className="pl-2" href="https://linkedin.com"><FaLinkedin /></a>
                        <a className="pl-2" href="https://twitter.com"><FaTwitterSquare /></a>
                        <a className="pl-2" href="https://instagram.com"><FaInstagramSquare /></a>
                    </div>
                </div>

                <div>
                    <h2 className="title-font font-medium text-dark tracking-normal flex text-md mb-3">EMAIL ADDRESS <RiArrowDownSFill className="text-red-600" /></h2>
                    <div className="flex">
                        <GoMail className="text-red-600" /> <span className="pl-2 text-sm">Email:</span>
                    </div>
                    <a className="text-sm text-red-400 hover:text-gray-400 cursor-pointer" href="mailto: dedugentity@gmail.com">bdnaimur@gmail.com</a>
                </div>
                <div >
                    <h2 className="title-font font-medium text-dark tracking-normal text-md mb-3 flex">MENU <RiArrowDownSFill className="text-red-600" /></h2>
                    <nav className="list-none mb-10">
                        <li>
                            <Link href="/" className="text-gray-400 text-sm hover:text-red-300">Home</Link>
                        </li>
                        <li>
                            <Link href="/" className="text-gray-400 text-sm hover:text-red-400">Our News and Updates</Link>
                        </li>
                        <li>
                            <Link href="/" className="text-gray-400 text-sm hover:text-red-400">Contact</Link>
                        </li>
                        <li>
                            <Link href="/" className="text-gray-400 text-sm hover:text-red-400">Sign Up</Link>
                        </li>
                        <li>
                            <Link href="/" className="text-gray-400 text-sm hover:text-red-400">Terms And Conditions</Link>
                        </li>
                    </nav>
                </div>
                <div >
                    <h2 className="flex title-font font-medium text-dark tracking-normal text-md mb-3 flex">ADDRESS <RiArrowDownSFill className="text-red-600" /></h2>
                    <div className="flex ">
                        <MdLocationOn className="text-red-600" /> <span className="pl-2 text-sm">Location:</span>
                    </div>
                    <p className="text-sm text-gray-400">Dhaka, Bangladesh, Cell-01977772188</p>
                </div>
            </div>
            <div className="text-gray-600 body-font py-2 bg-red-50 text-center">
                <p className="text-gray-400 text-sm hover:text-red-400"> {new Date().getFullYear()} All copyright reserve: Naimur Rahman</p>
            </div>
            <ScrollTop />
        </footer>
    );
};

export default Footer;