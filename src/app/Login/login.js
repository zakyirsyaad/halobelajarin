'use client'
import { signInUser } from '@/Redux/features/authSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const loginHandle = () => {
        dispatch(signInUser({ email, password }))
        setEmail("");
        setPassword("");
    }

    return (
        <form onSubmit={(e) => { e.preventDefault() }} className='flex flex-col items-start'>
            <p className='text-white font-medium text-xl md:text-2xl mb-5'>Login Account</p>

            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='example@belajarin.com' required
                className="input md:w-full w-80 md:mb-5 2xl:w-2/3 mb-4 bg-primary/20 transition duration-300 focus:bg-white md:focus:scale-110 focus:scale-105 placeholder:text-primary " />

            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required
                className="input md:w-full w-80 md:mb-5 2xl:w-2/3 mb-4 bg-primary/20 transition duration-300 focus:bg-white md:focus:scale-110 focus:scale-105 placeholder:text-primary" />
            <button className='btn bg-third hover:bg-secondary hover:text-primary duration-300 border-none px-14 mb-5' type="submit" onClick={loginHandle}>Login</button>
        </form>
    );
};

export default LoginForm;
