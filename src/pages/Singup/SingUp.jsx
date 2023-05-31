
import React, { useContext, useState } from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthProvider'

function SingUp() {
    const { register, updateUser, googleLogin, githubLogin } = useContext(AuthContext);
    const [error, setError] = useState(false);
    const [errorM, setErrorM] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || '/';

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const url = form.photoUrl.value;

        if (password.length < 6) {
            return setError(true)
        }

        register(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setError(false)
                form.reset()
                updateUserProfile(user,name, url)
                navigate(from)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorM(errorCode)
            });
    }
    const updateUserProfile = (user,name, url) => {
        updateUser(user,name, url)
            .then(() => {
                
            }).catch((error) => {
                const errorMessage = error.code;
                setErrorM(errorMessage)
            });
    }
    const handleGoogle = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                navigate(from)
            }).catch((error) => {
                const errorCode = error.code;
            });
    }
    const handleGithub = () => {
        githubLogin()
            .then((result) => {
                const user = result.user;
                navigate(from)
            }).catch((error) => {
                const errorCode = error.code;
            });
    }

    return (
        <div className='w-full flex flex-col justify-center items-center gap-4 py-8'>
            <h1 className='text-3xl font-bold'>Register Now</h1>
            <form onSubmit={handleRegister} className='w-[70%] md:w-[60%] lg:w-[50%] p-8 shadow-md rounded-md'>
                <p className='text-red-600 my-2'>{errorM}</p>
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                    <input type="text" name='name' id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your name" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name='email' id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@xyz.com" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" name='password' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Password' required />
                    {
                        error && <p className='text-red-500 mt-2'>The password will be less than 6 characters</p>
                    }
                </div>
                <div className="mb-6">
                    <label htmlFor="photoUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                    <input type="url" name='photoUrl' id="photoUrl" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='URL...' required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                <p className='mt-2'>Already have an account? Please <Link className='underline text-blue-700' to="/login">Login</Link></p>
            </form>
            <div className='flex items-center gap-6 w-[70%] md:w-[60%] lg:w-[50%] text-2xl font-semibold'>
                <div className='w-[100%] h-[2px] bg-slate-500'></div>
                <span>Or</span>
                <div className='w-[100%] h-[2px] bg-slate-500'></div>
            </div>
            <div className='w-[70%] md:w-[60%] lg:w-[50%]'>
                <span onClick={handleGoogle} className='w-[80%] md:w-[70%] lg:w-[60%] mx-auto flex items-center gap-10 p-2 bg-blue-600 text-white font-semibold text-xl rounded-md shadow-md cursor-pointer'>
                    <div className='p-2 rounded-full bg-white'><FaGoogle className='text-blue-600'></FaGoogle></div>
                    <p>Login with google</p>
                </span>
                <span onClick={handleGithub} className='w-[80%] md:w-[70%] lg:w-[60%] mx-auto flex items-center gap-10 p-2 bg-black text-white font-semibold text-xl rounded-md mt-4 shadow-md cursor-pointer'>
                    <div className='p-2 rounded-full bg-white'><FaGithub className='text-black'></FaGithub></div>
                    <p>Login with github</p>
                </span>
            </div>
        </div>
    )
}

export default SingUp
