import React from 'react'
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { IconContext } from "@react-icons/all-files"
import { Link } from 'gatsby'

export default function footer() {
    return (
        <footer className="footer bg-tealwkbo relative border-b-2 border-black">
            <div className="container mx-auto px-6">
                <div className="pt-4 flex-1 flex items-center justify-center">
                        <div className="flex space-x-4 ">
                            <Link to="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                                Inicio
                            </Link>
                            <Link to="/publicaciones" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                                Publicaciones
                            </Link>
                            <Link to="/participantes" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                                Participantes
                            </Link>
                        </div>
                </div>
            </div>
            <div className="container mx-auto px-6">
                <div className="pt-4 flex-1 flex items-center justify-center">
                        <div className="flex space-x-4 ">
                            <IconContext.Provider value={{size: "2em", color: "white"}}>
                                    <FaLinkedin className="cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/arturo-araujo-alvarez/')} />
                            </IconContext.Provider>
                        </div>
                </div>
            </div>
            <div className="container mx-auto px-6">
                <div className="mt-4 border-t-2 border-gray-300 flex flex-col items-center">
                    <div className="sm:w-2/3 text-center py-6">
                        <p className="text-sm text-tealwkli font-bold mb-2 cursor-pointer" onClick={() => window.open('https://asdeveloper.app/')}>
                            © 2021 by AS developer
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
