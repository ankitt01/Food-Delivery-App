import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"
import { FaShoppingBasket } from "react-icons/fa";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {firebaseApp} from "../firebase.config"

const Header = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(firebaseApp);
    

    const login = async () => {
        const response = await signInWithPopup(auth, provider)
        console.log(response)
    }
  return (
    <div className='w-screen fixed z-50 p-6 px-16'>
        {/* Desktop and tablet */}
        <div className='hidden md:flex justify-between'>
            <Link to={"/"} className="flex items-center gap-2">
            <img src={"/img/logo.png"} className="w-8 object-cover" alt="logo" />
            <p className="text-headingColor text-xl font-bold"> City</p>
            </Link>
            <div className='flex items-center gap-8 xl:gap-16'>
                <ul className="flex items-center gap-8 xl:gap-16">
                    <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
                    <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
                    <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About Us</li>
                    <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Service</li>
                </ul>

                <div className="relative flex items-center justify-center">
                    <FaShoppingBasket className="text-textColor text-2xl  cursor-pointer" />   
                    <div className='w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center absolute -top-2 -right-2'>
                        <p className='text-sm text-white font-semibold'>2</p>
                    </div>
                </div>

                <div className='relative'>
                    <motion.img 
                        whileTap={{ scale: 0.6 }} 
                        src="/img/avatar.png" 
                        className='w-10 min-w-[40px] drop-shadow-xl cursor-pointer' 
                        alt="avatar" 
                        onClick={login}
                    />
                </div>
            </div>
        </div>
        {/* Mobile */}
        <div className='flex md:hidden'>
        </div>
    </div>
  )
}

export default Header