'use client'
import { signUpUser } from '@/Redux/features/authSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const RegisterForm = () => {
    const [nama, setNama] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("");

    const dispatch = useDispatch()

    const dispatchHandler = () => {
        dispatch(signUpUser({ nama, email, password }))
        setNama("");
        setEmail("");
        setPassword("");
    }

    const passwordLength = () => {
        if (password.length < 6) {
            setErrorMessage("Password harus minimal 6 karakter");
            return;
        }
    }

    const registerHandle = () => {
        passwordLength();
        if (!errorMessage) {
            dispatchHandler();
        }
    }

    return (
        <form onSubmit={(e) => { e.preventDefault() }} className='flex flex-col items-start' >
            <p className='text-white font-medium text-xl md:text-2xl mb-5'>Register Account</p>
            <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} placeholder='Name' required
                className="input w-80 md:w-full md:mb-5 mb-4 2xl:w-2/3  bg-primary/20 transition duration-300 focus:bg-white md:focus:scale-110 focus:scale-105" />

            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='example@belajarin.com' required
                className="input md:w-full w-80 md:mb-5 2xl:w-2/3 mb-4 bg-primary/20 transition duration-300 focus:bg-white md:focus:scale-110 focus:scale-105 " />

            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required
                className="input md:w-full w-80 md:mb-5 2xl:w-2/3    mb-4 bg-primary/20 transition duration-300 focus:bg-white md:focus:scale-110 focus:scale-105" />
            <button className='btn bg-third hover:bg-secondary hover:text-primary duration-300 border-none px-14 mb-5' type="submit" onClick={registerHandle}>Register</button>
            {errorMessage && <p className="text-red-700">{errorMessage}</p>} {/* Menampilkan pesan error jika ada */}
        </form>
    );
};

export default RegisterForm;
