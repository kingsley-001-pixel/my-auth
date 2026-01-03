import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()

    // SETTING STATES OF INPUT FIELDS
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [warning, setWarning] = useState('')

    // DARK MODE SETUP
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

    // SETTING STATE OF USER'S EMAIL AND PASSWORD
    function handleEmail(event) {
        setEmail(e => event.target.value)
    }
    function handlePassword(e) {
        setPassword(p => event.target.value)
    }

    // ACCOUNT VALIDATION
    const handleSignIn = (e) => {
        e.preventDefault();

        // IF BOTH FIELDS ARE EMPTY
        if (!email || !password) {
            setWarning('Fill the required fields!');
            return;
        }

        // GETTING ALL USERS DATA TO COMPARE
        const users = JSON.parse(localStorage.getItem('users')) || []
        const user = users.find(u => u.email === email && u.password === password)

        
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user))
            navigate('/welcome');
        } else {
            setWarning('Incorrect email or password!')
            return;
        }
    }

    // GOTO SIGNUP PAGE
    const handleSignUp = () => {
        navigate('/signup')
    }


    return (
        <div className="bg-slate-50 grid justify-center items-center min-h-screen text-slate-900 font-roboto dark:bg-slate-700">
            <div className="bg-white min-w-[432px] h-full m-0 text-center p-6 rounded-r-lg grid justify-center items-center
            dark:bg-gray-900 relative">
                {/* TOGGLE THEME BUTTON */}
                <button className="absolute top-0 right-0 mx-0 my-2 mr-8 px-2 text-3xl" onClick={handleTheme}>{mode}</button>
                <form action="">
                <h1 className="text-yellow-300 text-4xl font-bold">Animefy</h1>
                <br />

                <h2 className="font-semibold text-xl dark:text-slate-50">Welcome back</h2>
                <h3 className="font-semibold text-xl dark:text-slate-50">Sign in to your account</h3>
                <br />

                {/* EMAIL INPUT */}
                <input className="bg-gray-50 border-gray-300 text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64 h-9 px-4 py-2 rounded shadow-sm shadow-gray-700 
                dark:bg-gray-700
                dark:border-gray-600
                dark:text-white
                dark:placeholder:text-gray-400 dark:shadow-white " 
                type="email" 
                name="email"
                placeholder="Email" 
                id="email" 
                onChange={handleEmail}/>
                <br />
                <br />

                {/* PASSWORD INPUT */}
                <input className="bg-gray-50 border-gray-300 text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64 h-9 px-4 py-2 rounded shadow-sm shadow-gray-700 mb-3
                dark:bg-gray-700
                dark:border-gray-600
                dark:text-white
                dark:placeholder:text-gray-400 dark:shadow-white " 
                type="password" 
                name="password" 
                placeholder="Password" 
                id="password" 
                onChange={handlePassword}/>
                <br />
                <p className="text-red-600">{warning}</p>
                <br />

                {/* FORGOT PASSWORD BUTTON */}
                <button className=" text-blue-600 px-4 py-2 rounded hover:text-blue-700">Forgot password?</button>
                <br />
                <br />

                {/* SIGN IN BUTTON */}
                <button 
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 shadow-sm shadow-indigo-700" 
                    type="submit"
                    onClick={handleSignIn}
                >Sign in</button>
                <br />
                <br />

                {/* SIGN UP BUTTON */}
                <button className="bg-transparent border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-100 hover:text-blue-700 shadow-sm shadow-indigo-700"
                onClick={handleSignUp}
                >Don't have an account? Sign up</button>
                </form>
                
                {/* FOOTER SECTION */}
            <footer>
                <div className="absolute mt-5 right-0  text-center left-0 bottom-10 md:bottom-8 md:left-0 md:right-0 md:mb-2 dark:text-slate-50">
                    <p className="">&copy;2026 Animefy. All rights reserved.</p>
                </div>
            </footer>
            </div>
        </div>
    )
}

export default Login
