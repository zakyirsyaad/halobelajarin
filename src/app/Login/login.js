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
                className="input md:w-1/2 w-96 md:mb-5 mb-4 bg-slate-600 transition duration-300 focus:bg-white md:focus:scale-110 focus:scale-105 " />

            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required
                className="input md:w-1/2 w-96 md:mb-5 mb-4 bg-slate-600 transition duration-300 focus:bg-white md:focus:scale-110 focus:scale-105" />
            <button className='btn btn-primary px-14' type="submit" onClick={loginHandle}>Login</button>
        </form>
    );
};

export default LoginForm;
