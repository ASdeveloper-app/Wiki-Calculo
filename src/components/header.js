import React, {useState} from 'react'
import uvm from '../img/uvm.png'
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose"
import {  AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu"
import { IconContext } from "@react-icons/all-files"
import { Link } from 'gatsby'

export default function Home() {
    const [open, setOpen] = useState(false)

    return (
        <>
        <header className="bg-tealwkbo">
            <div className="container mx-auto p-12 max-w-4xl">
                <div className="flex justify-center items-center">
                    <div className="flex-1">
                        <Link to="/" className="font-bold text-paperwk text-xl md:text-5xl lg:text-6xl xl:text-7xl">
                            Wiki Cálculo
                        </Link>
                        <p className=" font-light text-paperwk text-xs md:text-md lg:text-lg">Comunidad y aprendizaje.</p>
                    </div>
                    <img src={uvm} alt='Hombre enseñando' className="cursor-pointer h-6 md:h-8 lg:h-10 xl:h-10" onClick={() => window.open('https://uvm.mx/')}></img>
                </div>
            </div>
        </header>
        <nav className="flex items-center justify-end flex-wrap bg-tealwkbo pb-4 ">
            <div className="block lg:hidden pr-6" onClick={() => {setOpen(!open) ; console.log(open)}}>
                {
                open ? 
                <IconContext.Provider value={{size: "1.5em", color: "#dad7bc"}}>
                    <AiOutlineClose/>
                </IconContext.Provider> :
                <IconContext.Provider value={{size: "1.5em", color: "#dad7bc"}}>
                    <AiOutlineMenu/>
                </IconContext.Provider>
                }
            </div>
            <div className={open ? "w-full block lg:flex flex-grow  lg:items-center lg:w-auto text-left md:text-left lg:text-center xl:text-center pl-6 lg:pl-0 xl:pl-0" : "w-full hidden lg:flex flex-grow  lg:items-center lg:w-auto text-center"}>
                <div className="text-sm lg:text-base xl:text-base lg:flex-grow">
                    <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-tealwkli mr-10">
                        Inicio
                    </Link>
                    <Link to="/publicaciones" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-tealwkli mr-10">
                        Publicaciones
                    </Link>
                    <Link to="/participantes" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-tealwkli mr-10">
                        Participantes
                    </Link>
                </div>
            </div>    
        </nav>
        </>
    )
}


