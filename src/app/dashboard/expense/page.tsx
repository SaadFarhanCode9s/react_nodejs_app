
"use client"

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';




type SIGNUP_FIELDS = {
    username: string,
    email: string,
    password: string,
    confirmPassword: string
};


// For reference only
// toast.info("Lorem ipsum dolor"); // same as toast(message, {type: "info"});
// toast.error("Lorem ipsum dolor")
// toast.success("Lorem ipsum dolor")
// toast.warn("Lorem ipsum dolor")


export default function SignUp() {

    const router = useRouter();

    //Application Constants
    const BACKEND_API = process.env.API_URL ? process.env.API_URL : 'localhost';

    const SIGNUP_URL = process.env.SIGNUP_URL ? process.env.SIGNUP_URL : '/signup';


    // Application Regex Constants

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const usernameMaxLength = 25;
    const usernameMinLength = 5;



    //State Variables

    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    // const [errors, setErrors] = useState<any>({ "password": "Does not match", "username": "too short" });

    const [submitEnabled, setSubmitEnabled] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [passwordvisible, setPasswordvisible] = useState<boolean>(false);
    const [cPasswordVisible, setcPasswordVisible] = useState<boolean>(false);
    // const notify = () => toast("Wow so easy!");




    useEffect(() => {
        if (
            username && username != '' &&
            email && email != '' &&
            password && password != '' &&
            confirmPassword && confirmPassword != ''
        ) {
            setSubmitEnabled(true);
        } else {
            setSubmitEnabled(false);
        }

    }, [username, email, password, confirmPassword]);





    const onSubmit = async () => {
        setIsLoading(true);
        debugger
        //Email Validation
        if (!regex.test(email)) {
            toast.error("Invalid email address");
            setIsLoading(false);
            return
        }

        //Username Validation
        if (username.length > usernameMaxLength) {
            toast.error(`Username too long! Maximum allowed length is ${usernameMaxLength}`);
            setIsLoading(false);
            return
        }
        else if (username.length < usernameMinLength) {
            toast.error(`Username too short! Minimum allowed length is ${usernameMinLength}`);
            setIsLoading(false);
            return
        }

        //Password Validation
        if (confirmPassword !== password) {
            toast.error("Password and Confirm Password does not match");
            setIsLoading(false);
            return
        }

       

        const signupData = {
            username: username,
            password: password,
            email: email
        }

        try {
            // debugger
            const response = await axios.post(
                BACKEND_API + SIGNUP_URL, //This is API url e.g. http://localhost:9002/auth/signup
                signupData, // This is your payload data e.g. {"username":"zain", "email":"s@s.com"}
                {
                    headers: { "Content-Type": "application/json" } // Header for content type defines the backend which format the payload is sent.
                }
            );


            if (response?.data?.success) {

                toast.success("Signup Success!", {
                    onClose: () => {
                        setIsLoading(false);
                        router.push('/auth/signin')
                    },
                    autoClose: 3000
                });

            } else {
                toast.error("Signup failed. Server Error")
                setIsLoading(false);
            }

            //Possible repsonse from server:
            // 1. api -> HIT -> Server 
            //     server -> return -> response = {data : {success:true} }

            // 2. api -> HIT -> Server 
            //     server -> return -> response = "Error"

        }
        catch (e) {
            console.error("Exception----", e); //prints Stack trace of Exception
            toast.error("Signup failed. Server Error")
            setIsLoading(false);
        }

        //Do something with recieved data


        // axios.post()
        //     .then(response => {
        //         // Handle the success response
        //         console.error(response.data); // Prints "Hello, world!"
        //     })
        //     .catch(error => {
        //         // Handle the error response
        //         console.error(error);
        //     });

    };

    return (

        <div className="text-center pt-[15px]">

            {/* <button onClick={notify}>Notify!</button> */}



            <h5 className="font-[poppinsmedium] text-[16px] leading-[24px] text-white">Already have an account?
                <span className="text-[#0c5228]">
                    <Link href="/auth/signin">Sign in</Link>
                </span>
            </h5>


            {/* Signup Form Starts */}
            <div className="fields pt-[50px]">


                {/* Username Field Starts */}
                <div className="signup__field">

                    <input className="signup__input" type="text" name="username" id="username" required maxLength={25} onChange={(e) => setUsername(e.target.value)} />
                    <label className="signup__label" >
                        Username
                    </label>


                    <div className="absolute right-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" fill="#000" viewBox="0 0 512 512">
                            <path
                                d="M437.02 74.981C388.667 26.629 324.38 0 256 0S123.333 26.629 74.98 74.981C26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.019C123.333 485.371 187.62 512 256 512s132.667-26.629 181.02-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.98-181.019zM256 482c-66.869 0-127.037-29.202-168.452-75.511C113.223 338.422 178.948 290 256 290c-49.706 0-90-40.294-90-90s40.294-90 90-90 90 40.294 90 90-40.294 90-90 90c77.052 0 142.777 48.422 168.452 116.489C383.037 452.798 322.869 482 256 482z"
                                data-original="#000000"></path>
                        </svg>

                    </div>

                </div>


                {/* Username Field Ends */}




                {/* Email Field Starts */}
                <div className="signup__field">

                    <input className="signup__input" type="text" name="email" id="email" required maxLength={25} onChange={(e) => setEmail(e.target.value)} />
                    <label className="signup__label">Email</label>


                    <div className="absolute right-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" fill="#000" viewBox="0 0 512 512">
                            <path
                                d="M298.789 313.693c-12.738 8.492-27.534 12.981-42.789 12.981-15.254 0-30.05-4.489-42.788-12.981L3.409 173.82A76.269 76.269 0 0 1 0 171.403V400.6c0 26.278 21.325 47.133 47.133 47.133h417.733c26.278 0 47.133-21.325 47.133-47.133V171.402a75.21 75.21 0 0 1-3.416 2.422z"
                                data-original="#000000" />
                            <path
                                d="m20.05 148.858 209.803 139.874c7.942 5.295 17.044 7.942 26.146 7.942 9.103 0 18.206-2.648 26.148-7.942L491.95 148.858c12.555-8.365 20.05-22.365 20.05-37.475 0-25.981-21.137-47.117-47.117-47.117H47.117C21.137 64.267 0 85.403 0 111.408a44.912 44.912 0 0 0 20.05 37.45z"
                                data-original="#000000" />
                        </svg>

                    </div>

                </div>

                <div className="signup__field">
                    <input className="signup__input" type={passwordvisible ? "text" : "password"} name="password" id="password" required maxLength={25} onChange={(e) => setPassword(e.target.value)} />
                    <label className="signup__label">Password</label>
                    <div className=" flex flex-row  absolute right-4">


                        {passwordvisible ?
                            <>
                                <svg fill="#000000" width="22px" height="30px" version="1.1" id="Capa_1"
                                    viewBox="0 0 612 612" className="mx-[10px] cursor-pointer" onClick={(e) => setPasswordvisible(!passwordvisible)}>
                                    <g>
                                        <g>
                                            <path d="M609.608,315.426c3.19-5.874,3.19-12.979,0-18.853c-58.464-107.643-172.5-180.72-303.607-180.72
			                            S60.857,188.931,2.393,296.573c-3.19,5.874-3.19,12.979,0,18.853C60.858,423.069,174.892,496.147,306,496.147
			                            S551.143,423.069,609.608,315.426z M306,451.855c-80.554,0-145.855-65.302-145.855-145.855S225.446,160.144,306,160.144
			                            S451.856,225.446,451.856,306S386.554,451.855,306,451.855z"/>
                                            <path d="M306,231.67c-6.136,0-12.095,0.749-17.798,2.15c5.841,6.76,9.383,15.563,9.383,25.198c0,21.3-17.267,38.568-38.568,38.568
			                            c-9.635,0-18.438-3.541-25.198-9.383c-1.401,5.703-2.15,11.662-2.15,17.798c0,41.052,33.279,74.33,74.33,74.33
			                            s74.33-33.279,74.33-74.33S347.052,231.67,306,231.67z"/>
                                        </g>
                                    </g>
                                </svg>
                            </>

                            :

                            <>
                                <svg width="22px" height="30px" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg"
                                    className="mx-[10px] cursor-pointer" onClick={(e) => setPasswordvisible(!passwordvisible)}>

                                    <g fill="none" fillRule="evenodd" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" transform="translate(2 4)">

                                        <path d="M4.21098664 2.25927021C2.72674608 3.17424129 1.32308387 4.58781789 0 6.5 2.53705308 10.1666667 5.37038642 12 8.5 12 9.9230893 12 11.2849174 11.6209257 12.5854843 10.8627772M14.173426 9.72269094C15.1532781 8.88149971 16.0954695 7.8072694 17 6.5 14.4629469 2.83333333 11.6296136 1 8.5 1 7.66950473 1 6.85987336 1.1291024 6.0711059 1.38730721" />

                                        <line x1="2" x2="15" y2="13.071" />

                                    </g>

                                </svg>

                            </>
                        }


                        <svg

                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="#000"
                            className="h-7 w-7 opacity-70" >
                            <path

                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>

                    </div>

                    {/* Declearing errors here if and when available */}
                    {/* {errors?.password && <p className="text-[#ff5555]">{errors.password.message}</p>} */}

                </div>
                <div className="signup__field">
                    <input className="signup__input" type={cPasswordVisible ? "text" : "password"} required maxLength={25} onChange={(e) => setConfirmPassword(e.target.value)}


                    />
                    <label className="signup__label">Confirm Password</label>

                    <div className="flex flex-row absolute right-4">
                        {cPasswordVisible ?
                            <>
                                <svg fill="#000000" width="22px" height="30px" version="1.1" id="Capa_1"
                                    viewBox="0 0 612 612" className="mx-[10px] cursor-pointer" onClick={(e) => setcPasswordVisible(!cPasswordVisible)}>
                                    <g>
                                        <g>
                                            <path d="M609.608,315.426c3.19-5.874,3.19-12.979,0-18.853c-58.464-107.643-172.5-180.72-303.607-180.72
			                            S60.857,188.931,2.393,296.573c-3.19,5.874-3.19,12.979,0,18.853C60.858,423.069,174.892,496.147,306,496.147
			                            S551.143,423.069,609.608,315.426z M306,451.855c-80.554,0-145.855-65.302-145.855-145.855S225.446,160.144,306,160.144
			                            S451.856,225.446,451.856,306S386.554,451.855,306,451.855z"/>
                                            <path d="M306,231.67c-6.136,0-12.095,0.749-17.798,2.15c5.841,6.76,9.383,15.563,9.383,25.198c0,21.3-17.267,38.568-38.568,38.568
			                            c-9.635,0-18.438-3.541-25.198-9.383c-1.401,5.703-2.15,11.662-2.15,17.798c0,41.052,33.279,74.33,74.33,74.33
			                            s74.33-33.279,74.33-74.33S347.052,231.67,306,231.67z"/>
                                        </g>
                                    </g>
                                </svg>
                            </>

                            :

                            <>
                                <svg width="22px" height="30px" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg"
                                    className="mx-[10px] cursor-pointer" onClick={(e) => setcPasswordVisible(!cPasswordVisible)}>

                                    <g fill="none" fillRule="evenodd" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" transform="translate(2 4)">

                                        <path d="M4.21098664 2.25927021C2.72674608 3.17424129 1.32308387 4.58781789 0 6.5 2.53705308 10.1666667 5.37038642 12 8.5 12 9.9230893 12 11.2849174 11.6209257 12.5854843 10.8627772M14.173426 9.72269094C15.1532781 8.88149971 16.0954695 7.8072694 17 6.5 14.4629469 2.83333333 11.6296136 1 8.5 1 7.66950473 1 6.85987336 1.1291024 6.0711059 1.38730721" />

                                        <line x1="2" x2="15" y2="13.071" />

                                    </g>

                                </svg>

                            </>
                        }


                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="#000"
                            className="h-7 w-7 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>


                    </div>
                </div>


            </div>

            {isLoading ?
                <>
                    <button disabled type="button" className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                        <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                        </svg>
                        Loading...
                    </button>
                </>

                :

                <>

                    <button
                        onClick={() => onSubmit()}
                        type="button"
                        disabled={submitEnabled ? false : true}
                        className={`${!submitEnabled && 'opacity-50'} text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 `}>
                        Create Account</button>
                </>
            }







        </div>
    );
}