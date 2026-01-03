import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Welcome({props, name='Guest'}) {

    const navigate = useNavigate()

    // DARK MODE SETUP
    const [mode, setMode] = useState('Dark Mode')
    const [isDark, setIsDark] = useState(false)
    const handleTheme = () => setIsDark( prev => !prev )
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark')
            setMode(c => '🌙')
            console.log(document.documentElement.classList);
        } else {
            document.documentElement.classList.remove('dark')
            setMode(c => '🌘')
            console.log(document.documentElement.classList);
        }
    }, [isDark])

    // LOGGING OUT
    function handleLogOut() {
        confirm('Are you sure you want to log out?')
        if (confirm) {
            navigate('/login')
        }
    }


// GETTING USER NAME
    const users = JSON.parse(localStorage.getItem('currentUser'))
    const username = users.name;
    
    return (
        <div className="bg-slate-50 min-h-screen text-slate-900 font-roboto dark:bg-gray-900 dark:text-slate-50">
            {/* LOG OUT BUTTON */}
            <button className=" bg-blue-600 text-white py-2 rounded hover:bg-blue-700 shadow-sm shadow-indigo-700 font-bold text-lg filter m-5 px-4" onClick={handleLogOut}>Log out</button>
            {/* WELCOME MESSAGE */}
            <h1 className="text-6xl text-center font-extrabold dark:text-slate-50 shadow-lg shadow-indigo-600 p-5 ring-4 rounded-lg border-indigo-500 mt-40
            ">Welcome {username}</h1>
            {/* TOGGLE THEME BUTTON */}
            <button className="absolute top-0 right-3 mx-2 my-6 px-2 text-3xl" onClick={handleTheme}>{mode}</button>
            {/* FOOTER SECTION */}
            <footer>
                <div className="absolute mt-5 right-0  text-center left-0 bottom-10 md:bottom-8 md:left-0 md:right-0 md:mb-2 dark:text-slate-50">
                    <p className="">&copy;2026 Animefy. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Welcome

