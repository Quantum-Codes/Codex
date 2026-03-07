import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fab);

const SignupPopup = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Popup Content */}
            <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 transform transition-all scale-100 opacity-100 animate-in fade-in zoom-in duration-300">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <FontAwesomeIcon icon={['fas', 'times']} className="text-xl" />
                </button>

                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
                    <p className="text-gray-500">Join our community of developers</p>
                </div>

                <div className="space-y-4">
                    <button className="flex items-center justify-center gap-3 w-full bg-[#24292e] hover:bg-[#1a1e22] text-white py-3 px-4 rounded-xl font-semibold transition-all hover:shadow-lg active:scale-[0.98]">
                        <FontAwesomeIcon icon={['fab', 'github']} className="text-xl" />
                        <span>Sign up with GitHub</span>
                    </button>

                    <button className="flex items-center justify-center gap-3 w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 py-3 px-4 rounded-xl font-semibold transition-all hover:shadow-lg active:scale-[0.98]">
                        <FontAwesomeIcon icon={['fab', 'google']} className="text-xl text-red-500" />
                        <span>Sign up with Google</span>
                    </button>

                    <button className="flex items-center justify-center gap-3 w-full bg-[#f89f1b] hover:bg-[#e68e0d] text-white py-3 px-4 rounded-xl font-semibold transition-all hover:shadow-lg active:scale-[0.98]">
                        {/* <FontAwesomeIcon icon={['fab', 'linkedin-in']} className="hidden" />  */}
                        <img src="assets/leetcode.svg" className='w-8 text-white' alt="" />
                        <span>Sign up with LeetCode</span>
                    </button>
                </div>

                <div className="mt-8 text-center text-sm text-gray-500">
                    Already have an account? <button onClick={onClose} className="text-[#693ade] font-semibold hover:underline">Log In</button>
                </div>
            </div>
        </div>
    );
};

export default SignupPopup;
