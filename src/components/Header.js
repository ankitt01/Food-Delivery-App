import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"
import { FaShoppingBasket } from "react-icons/fa";
import { MdAdd, MdLogout } from "react-icons/md";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {firebaseApp} from "../firebase.config"
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const Header = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(firebaseApp);
    
    const [{user}, dispatch] = useStateValue();
    const [isMenu, setIsMenu] = useState(false)
    const login = async () => {
        if(!user) {
            const {user: {providerData}} = await signInWithPopup(auth, provider)
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0]
            })
    
            //saving it to local storage
            localStorage.setItem("user", JSON.stringify(providerData[0]));
        }else {
            setIsMenu(!isMenu)
        }
    }

    const logout = () => {
        setIsMenu(false)
        localStorage.clear()

        dispatch({
            type: actionType.SET_USER,
            user: null,
        })
    }
  return (
    <div className='w-screen fixed z-50 p-3 md:p-6 px-4 md:px-16 bg-primary'>
        {/* Desktop and tablet */}
        <div className='hidden md:flex justify-between'>
            <Link to={"/"} className="flex items-center gap-2">
                <img src={"/img/logo.png"} className="w-8 object-cover" alt="logo" />
                <p className="text-headingColor text-xl font-bold"> City</p>
            </Link>
            <div className='flex items-center gap-8 xl:gap-16'>
                <motion.ul
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 200 }} className="flex items-center gap-8 xl:gap-16">
                    <li onClick={() => setIsMenu(false)} className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
                    <li onClick={() => setIsMenu(false)} className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
                    <li onClick={() => setIsMenu(false)} className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About Us</li>
                    <li onClick={() => setIsMenu(false)} className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Service</li>
                </motion.ul>

                <div className="relative flex items-center justify-center">
                    <FaShoppingBasket className="text-textColor text-2xl  cursor-pointer" />   
                    <div className='w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center absolute -top-2 -right-2'>
                        <p className='text-sm text-white font-semibold'>2</p>
                    </div>
                </div>

                <div className='relative'>
                    <motion.img 
                        whileTap={{ scale: 0.8 }} 
                        src={user ? user.photoURL : "/img/avatar.png"}
                        className='w-10 min-w-[40px] drop-shadow-xl cursor-pointer rounded-full' 
                        alt="avatar" 
                        onClick={login}
                    />
                    {
                        isMenu && (
                            <motion.div 
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.6 }}
                            className='w-40 bg-gray-50 shadow-xl rounded-lg absolute top-12 right-0 flex flex-col'>
                                {user && user.email === "ankitrawat0102@gmail.com" && (
                                    <Link to={'/createItem'}>
                                        <p onClick={() => setIsMenu(false)} className= "px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
                                        >New Item <MdAdd />
                                        </p >  
                                    </Link>
                                )}      
                                
                                <p className= "px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
                                    onClick={logout}
                                >
                                    Logout <MdLogout />
                                </p>
                            </motion.div>
                        )
                    }
                </div>
            </div>
        </div>
        {/* Mobile */}
        <div className='flex md:hidden justify-between bg-primary'>
            <div className="relative flex items-center justify-center">
                <FaShoppingBasket className="text-textColor text-2xl  cursor-pointer" />   
                <div className='w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center absolute -top-0 -right-2'>
                    <p className='text-sm text-white font-semibold'>2</p>
                </div>
            </div>
            <Link to={"/"} className="flex items-center gap-2">
                <img src={"/img/logo.png"} className="w-8 object-cover" alt="logo" />
                <p className="text-headingColor text-xl font-bold"> City</p>
            </Link>

            <div className='relative'>
                    <motion.img 
                        whileTap={{ scale: 0.8 }} 
                        src={user ? user.photoURL : "/img/avatar.png"}
                        className='w-10 min-w-[40px] drop-shadow-xl cursor-pointer rounded-full' 
                        alt="avatar" 
                        onClick={login}
                    />
                    {
                        isMenu && (
                            <motion.div 
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.6 }}
                            className='w-40 bg-gray-50 shadow-xl rounded-lg absolute top-12 right-0 flex flex-col'>
                                {user && user.email === "ankitrawat0102@gmail.com" && (
                                    <Link to={'/createItem'}>
                                        <p onClick={() => setIsMenu(false)} className= "px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
                                        >New Item <MdAdd />
                                        </p >  
                                    </Link>
                                )}  
                                <ul className="flex flex-col">
                                    <li onClick={() => setIsMenu(false)} className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">Home</li>
                                    <li onClick={() => setIsMenu(false)} className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">Menu</li>
                                    <li onClick={() => setIsMenu(false)} className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">About Us</li>
                                    <li onClick={() => setIsMenu(false)} className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">Service</li>
                                </ul>    
                                <p
                                 onClick={logout}
                                 className= "m-2 px-4 py-2 shadow-md flex justify-center bg-slate-200 rounded-b-lg items-center gap-3 cursor-pointer hover:bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-base">
                                    Logout <MdLogout /></p>
                            </motion.div>
                        )
                    }
                </div>
        </div>
    </div>
  )
}

export default Header