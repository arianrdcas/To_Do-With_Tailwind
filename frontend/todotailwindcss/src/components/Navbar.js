import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <div className="text-3xl max-h-screen text-center  p-4 bg-black">
                <ul>
                    <Link className="block mt-4 px-5 lg:inline-block lg:mt-0 text-white hover:text-indigo-400 mr-4" to="/">
                        Home
                    </Link>
                    <Link className="block mt-4 px-5 lg:inline-block lg:mt-0 text-white hover:text-indigo-400 mr-4" to="/register">
                        Registro
                    </Link>
                    <Link className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-indigo-400 mr-4" to="/login">
                        Login
                    </Link>
                    <Link className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-indigo-400 ml-4" to="/tareas">
                        Tareas
                    </Link>
                </ul>
            </div>
        </>
    )
}

export default Navbar