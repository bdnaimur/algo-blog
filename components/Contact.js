import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { BiSupport } from "react-icons/bi";
import { ImWhatsapp, ImCancelCircle } from "react-icons/im";
import Fade from 'react-reveal/Fade';
import swal from 'sweetalert';
import { useToasts } from 'react-toast-notifications';
const Contact = () => {
    const { addToast,removeToast } = useToasts();
    const [show, setShow] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        addToast('Processing', { appearance: 'success' });
        emailjs.sendForm('service_7ykjwk9',
            'contact_form',
            e.target,
            'user_9atVolFDF0CeY22Zu9QcB')
            .then(res => {
                if (res.text === "OK") {
                    removeToast,('Sent Successfully', { appearance: 'success' });
                    swal("Thank you!", "Your message was sent successfully.", "success");
                } else {
                    swal("Sorry!", "Something went wrong. Please try again later", "error");
                }
            }, (err) => {
                if (err) {
                    removeToast,(error.message, { appearance: 'error' });
                }
                swal("Sorry!", "Something went wrong. Please try again later", "error")
            });
        e.target.reset();
    }
    return (
        <section>
            <div className="container text-white max-w-screen-xl p-4 py-10 bg-white dark:bg-gray-800 mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-10">
                {show &&
                    <div className="bg-green-200 border-green-600 text-green-600 border-l-4 p-4" role="alert">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-bold">
                                    Success!
                                </p>
                                <p>
                                    your message was successfully sent.
                                </p>
                            </div>
                            <span onClick={() => setShow(false)} className="text-xl cursor-pointer"><ImCancelCircle /></span>
                        </div>
                    </div>
                }
                <div className="relative">
                    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div className="lg:col-start-2 lg:max-w-2xl ml-auto">
                            <div className="div-fix w-full max-w-2xl px-5 py-5 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
                                <Fade bottom duration={2500} distance="40px">

                                    <div className="">
                                        <div className="px-4 py-2 text-center">
                                            <div className='p-4'><BiSupport className='m-auto text-red-400 text-7xl' /></div>
                                            <div className="font-bold text-xl mb-2 text-black">Chat</div>
                                            <p className="text-gray-700 text-base px-14">
                                                Chat with us to book or ask about your delivery order status and other inquiries.
                                            </p>
                                        </div>
                                        <div className="px-4 pt-4 pb-2">
                                            <button type="button" className="m-auto block py-2 px-2  bg-green-400 hover:bg-green-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                <ImWhatsapp className='inline mx-3 text-3xl' />WhatsApp
                                            </button>
                                            <button type="button" className="m-auto block my-5 py-2 px-2  bg-green-400 hover:bg-green-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                ONLINE CHAT SUPPORT
                                            </button>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                        <div className="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
                            <div className="mx-10  relative space-y-4">
                                <Fade top duration={2500} distance="40px">
                                    <form onSubmit={sendEmail} className="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
                                        <div className="div-fix w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
                                            <div className=" font-bold mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
                                                Contact with us !
                                            </div>
                                            <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                                                <div className="col-span-2 lg:col-span-1">
                                                    <div className=" relative ">
                                                        <input type="text" name="name" id="contact-form-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your name *" required />
                                                    </div>
                                                </div>
                                                <div className="col-span-2 lg:col-span-1">
                                                    <div className=" relative ">
                                                        <input type="text" name="email" id="contact-form-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your email *" required />
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <label className="text-gray-700" htmlFor="message">
                                                        <textarea className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="Enter your comment *" name="message" rows="5" cols="40" required>
                                                        </textarea>
                                                    </label>
                                                </div>
                                                <div className="col-span-2 text-right">
                                                    <p className="z-50 text-red-400 text-left -mb-8">* Required Feilds</p>
                                                    <button type="submit" className="py-2 px-4  bg-green-400 hover:bg-green-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                        Send
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Contact;