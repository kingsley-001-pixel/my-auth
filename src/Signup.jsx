import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Signup() {


    const navigate = useNavigate()
    // SETTING STATES OF INPUT ELEMENTS
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [warningText, setWarningText] = useState('')

    // DARKMODE SETUP
    const [mode, setMode] = useState('Dark Mode')
    const [isDark, setIsDark] = useState(false)
        const handleTheme = () => setIsDark( prev => !prev )
        useEffect(() => {
            if (isDark) {
                document.documentElement.classList.add('dark')
                setMode(c => '🌙')
            } else {
                document.documentElement.classList.remove('dark')
                setMode(c => '🌘')
            }
        }, [isDark])

    // SETTING INPUT
    const handleFirstName = (e) => {
        setFirstName(f =>  e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(f =>  e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(f =>  e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(f =>  e.target.value)
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(f =>  e.target.value)
    }

    // ACCOUNT VALIDATION
    const handleCreateAccount = async (e) => {
        e.preventDefault();

        // IF ALL FIELDS ARE EMPTY
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            setWarningText(w => 'Input all fields')
            return;
        }

        // IF PASSWORD LENGTH IS SHORT
        if (password.length < 8) {
            setWarningText(w => 'Password minimum length is 8 characters')
            return;
        }

        // MATCHING PASSWORDS
        if (password !== confirmPassword) {
            setWarningText(w => 'Passwords do not match')
            return;
        }

        // CHECKING EMAIL
        if (!email.includes('@')) {
            setWarningText(w => 'Invalid email format')
            return;
        }

        // STORING USER INFO
        const users = JSON.parse(localStorage.getItem('users')) || []

        // CHECKING IF USER HAS BEEN REGISTERED
        const isRegistered = users.find(
            u => u.email === email
        )
        if (isRegistered) {
            setWarningText(w => 'User already exists')
            return;
        } 

        // REGISTRATION IF THERE IS NO ERROR
        const newUser = {name: firstName, email: email, password: password}
        users.push(newUser)
        localStorage.setItem('users', JSON.stringify(users))
        navigate('/')
    }

    // GOTO LOGIN PAGE IF USER HAS REGISTERED
    function handleLogin() {
        navigate('/')
    }



    return (
        <div className="bg-slate-50 flex justify-center items-center min-h-screen text-slate-900 font-roboto dark:bg-slate-700 
        ">
            {/* TOGGLE THEME BUTTON */}
            <button className="absolute top-0 right-3 mx-0 my-2 px-4 text-3xl" onClick={handleTheme}>{mode}</button>
            <div className="md:flex md:flex-1 md:items-center md:justify-center md:w-[700px] md:h-[550px] md:mx-auto md:my-auto md:rounded-lg
            ">
            <div className="
            bg-gradient-to-r from-blue-500 to-indigo-600 w-screen py-3 font-bold m-0 space-y-2 text-xl pl-12
            md:w-[268px] md:grid md:text-center md:h-full md:text-2xl md:font-bold md:m-0 md:p-6 rounded-l-lg
            dark:from-blue-700
            dark:to-indigo-700
            ">

            {/* HEADER/WELCOME SECTION */}
                <h1>Welcome</h1>
                <h1>to</h1>
                <h1 className="text-yellow-300 text-3xl ">Animefy</h1>
                <p>Watch animes at your convenience.</p>
                <h2>Start using <span className="text-yellow-300 text-3xl">Animefy</span> today.</h2>
                <p></p>
            </div>
            {/* FORM INPUT CONTAINER */}
            <div className=" bg-white min-w-[432px] h-full m-0 text-center p-6 rounded-r-lg
            dark:bg-gray-900">
                <form action="">
                <h2 className="font-semibold text-xl dark:text-white">Create an account</h2>
                <br />

                {/* INPUT FIRST NAME */}
                <input 
                className="bg-gray-50 border-gray-300 text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64 h-9 px-4 py-2 rounded shadow-sm shadow-gray-700 
                dark:bg-gray-700
                dark:border-gray-600
                dark:text-white
                dark:placeholder:text-gray-400 dark:shadow-white " 
                type="text" 
                name="first-name" 
                placeholder="First name" 
                id="first-name" 
                onChange={handleFirstName}
                />
                <br /> 
                <br /> 

                {/* INPUT LAST NAME */}
                <input 
                    className="bg-gray-50 border-gray-300 text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64 h-9 px-4 py-2 rounded shadow-sm shadow-gray-700 
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:text-white
                    dark:placeholder:text-gray-400  dark:shadow-white " 
                    type="text" 
                    name="last-name" 
                    placeholder="Last name" 
                    id="last-name"
                    onChange={handleLastName}
                    />
                <br /> 
                <br /> 

                {/* INPUT EMAIL */}
                <input 
                    className="bg-gray-50 border-gray-300 text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64 h-9 px-4 py-2 rounded shadow-sm shadow-gray-700 
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:text-white
                    dark:placeholder:text-gray-400  dark:shadow-white " 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    id="email" 
                    onChange={handleEmail}/>
                <br /> 
                <br /> 

                {/* INPUT PASSWORD */}
                <input 
                    className="bg-gray-50 border-gray-300 text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64 h-9 px-4 py-2 rounded shadow-sm shadow-gray-700 
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:text-white
                    dark:placeholder:text-gray-400  dark:shadow-white " 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    id="password" 
                    onChange={handlePassword}/>
                <br /> 
                <br /> 

                {/* INPUT CONFIRM PASSWORD */}
                <input 
                    className="bg-gray-50 border-gray-300 text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64 h-9 px-4 py-2 rounded shadow-sm shadow-gray-700 mb-3 
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:text-white
                    dark:placeholder:text-gray-400  dark:shadow-white " 
                    type="password" 
                    name="confirm-password" 
                    placeholder="Confirm Password" 
                    id="confirm-password" 
                    onChange={handleConfirmPassword}/>
                <br /> 
                <p className="text-red-600" id="warning">{warningText}</p>
                <br /> 

                {/* CREATE ACCOUNT BUTTON */}
                <button 
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 shadow-sm shadow-indigo-700" 
                    type="submit"
                    onClick={handleCreateAccount}>Create account</button>
                <br /> 
                <br /> 

                {/* SIGN IN BUTTON */}
                <button className="bg-transparent border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-100 hover:text-blue-700 shadow-sm shadow-indigo-700 mb-10"
                onClick={handleLogin}
                >Have an account? Sign in</button>
            </form>
            </div>
            </div>

            {/* FOOTER SECTION */}
            <footer>
                <div className="absolute mt-5 right-0  text-center left-0 bottom-[-22%]  md:absolute md:bottom-0 dark:text-slate-50 md:left-0 md:right-0  md:mb-2">
                    <p className="">&copy;2026 Animefy. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Signup