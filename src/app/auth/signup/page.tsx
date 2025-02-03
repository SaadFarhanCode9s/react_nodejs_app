
"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type SIGNUP_FIELDS = {
    username: string,
    email: string,
    password: string,
    confirmPassword: string
};


export default function SignUp() {

    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [errors, setErrors] = useState<any>();

    const [submitEnabled, setSubmitEnabled] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // useEffect(() => {
    //     alert(username)
    // }, [username]);

// a = b type 123 == '123'
// a == b type 123 != '123'
// a === b type ????

    useEffect(() => {
        if (
            username && username != '' &&
            email && email != '' &&
            password && password != ''

        ) {
            setSubmitEnabled(true);
        } else {
            setSubmitEnabled(false);
        }

    }, [username, email, password]);





    const onSubmit = () => {

    };

    return (
        <div className="text-center pt-[15px]">


            <h5 className="font-[poppinsmedium] text-[16px] leading-[24px] text-white">Already have an account?
                <span className="text-[#0c5228]">
                    <Link href="/auth/signin">Sign in</Link>
                </span>
            </h5>



            <div className="fields pt-[50px]">
                <div className="signup__field">

                    <input className="signup__input" type="text" name="username" id="username" required  maxLength={25} onChange={(e) => setUsername(e.target.value)} />
                    <label className="signup__label" >Username</label>


                    <div className="absolute right-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" fill="#000" viewBox="0 0 512 512">
                            <path
                                d="M437.02 74.981C388.667 26.629 324.38 0 256 0S123.333 26.629 74.98 74.981C26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.019C123.333 485.371 187.62 512 256 512s132.667-26.629 181.02-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.98-181.019zM256 482c-66.869 0-127.037-29.202-168.452-75.511C113.223 338.422 178.948 290 256 290c-49.706 0-90-40.294-90-90s40.294-90 90-90 90 40.294 90 90-40.294 90-90 90c77.052 0 142.777 48.422 168.452 116.489C383.037 452.798 322.869 482 256 482z"
                                data-original="#000000"></path>
                        </svg>
                    </div>

                    {/* Declearing errors here if and when available */}
                    {/* {errors?.username && <p className="text-[#ff5555]">{errors.username}</p>} */}
                </div>

                <div className="signup__field">

                    <input className="signup__input" type="text" name="email" id="email" required />
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

                    {/* Declearing errors here if and when available */}
                    {/* {errors?.email && <p className="text-[#ff5555]">{errors.email.message}</p>} */}
                </div>

                <div className="signup__field">
                    <input className="signup__input" type="password" name="password" id="password" required />
                    <label className="signup__label">Password</label>
                    <div className="absolute right-4">
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

                    {/* Declearing errors here if and when available */}
                    {/* {errors?.password && <p className="text-[#ff5555]">{errors.password.message}</p>} */}

                </div>
                <div className="signup__field">
                    <input className="signup__input" type="password" required


                    />
                    <label className="signup__label">Confirm Password</label>

                    <div className="absolute right-4">
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

            <button
                onClick={() => onSubmit()}
                type="button"
                disabled={submitEnabled ? false : true}
                className={`${!submitEnabled && 'opacity-50'} text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 `}>
                Create Account</button>



        </div>
    );
}