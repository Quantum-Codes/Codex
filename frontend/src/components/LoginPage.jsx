import React, { useState } from 'react';
import SignupPopup from './SignupPopup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);


const LoginPage = () => {
    const Input = (props) => {
        return (
            <div className="flex items-center border w-full focus-within:border-indigo-500 transition duration-300 pr-3 gap-2 bg-white border-gray-500/30 h-[46px] rounded-[5px] overflow-hidden">
                <input
                    type={props.type}
                    placeholder={props.placeholder}
                    className="w-full h-full pl-4 outline-none placeholder-gray-500 text-sm"
                />

                <FontAwesomeIcon icon={props.icon} className="text-gray-500 text-xl" />
            </div>
        );
    };


    const [showSignup, setShowSignup] = useState(false);

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#f8f9fd] p-4 font-sans relative overflow-hidden">
            {/* Popup */}
            {showSignup && <SignupPopup onClose={() => setShowSignup(false)} />}

            {/* Floating Icons (Now blurred along with main content) */}
            <div className={`absolute inset-0 pointer-events-none transition-all duration-300 ${showSignup ? 'blur-md' : 'blur-0'}`}>
                <div className="floating-icon icon-1">
                    <div className="bg-[#6366F1] p-2 rounded-xl">
                        <FontAwesomeIcon icon="layer-group" className="text-white text-3xl" />
                    </div>
                </div>

                <div className="floating-icon icon-2">
                    <div className="bg-orange-100 p-4 rounded-2xl">
                        <FontAwesomeIcon icon="award" className="text-orange-500 text-3xl" />
                    </div>
                </div>

                <div className="floating-icon icon-3">
                    <div className="bg-emerald-100 p-5 rounded-xl">
                        <FontAwesomeIcon icon='trophy' className="text-emerald-500 text-xl" />
                    </div>
                </div>

                <div className="floating-icon icon-4">
                    <div className="bg-purple-100 p-4 rounded-xl">
                        <FontAwesomeIcon icon="boxes-stacked" className="text-purple-500 text-3xl" />
                    </div>
                </div>

                <div className="floating-icon icon-5">
                    <div className="bg-blue-100 p-3 rounded-lg rotate-12">
                        <FontAwesomeIcon icon="bolt-lightning" className="text-blue-500 text-2xl" />
                    </div>
                </div>
            </div>

            {/* Main Content with Blur */}
            <div className={`flex justify-center items-center transition-all duration-300 ${showSignup ? 'blur-md' : 'blur-0'}`}>
                <div className="login-area text-black text-center">
                    <h1 className="text-5xl font-bold p-4">Login to <span className='text-[#693ade]'>Codex</span> Pro</h1>
                    <h3 className='text-xl text-gray-500 mb-3'>Access your coding journey and metrics</h3>


                    <form action="">
                        <div className="inputs-section bg-white py-10 px-12 rounded-2xl mt-8">
                            <div className="group-container">
                                <div className="div-group mb-6">
                                    {/* <input type="email" name="" id="" /> */}
                                    <Input type="email" placeholder="Email Address" icon="at" />
                                </div>
                                <div className="div-group mb-6">
                                    {/* <input type="email" name="" id="" /> */}
                                    <Input type="password" placeholder="Password" icon='lock' />
                                </div>
                            </div>
                            <input type="submit" value="Login" className="bg-[#693ade] text-[#fff] cursor-pointer py-2.5 px-6 block w-full rounded-[5px] mb-4" />

                            <a href="#"><span className='text-[#693ade] text-[15px]'>Forget Password</span></a>
                            <p className='text-[15px] text-gray-600'>Dont have an acoount? <button type="button" onClick={() => setShowSignup(true)} className='text-[#693ade] hover:underline cursor-pointer'>Sign Up</button></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
