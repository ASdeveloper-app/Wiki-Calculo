import React, {useState} from 'react'
import search from '../img/search.jpg'
import read from '../img/read.svg'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { RiArrowDropUpLine } from "@react-icons/all-files/ri/RiArrowDropUpLine"
import {  RiArrowDropDownLine } from "@react-icons/all-files/ri/RiArrowDropDownLine"
import { IconContext } from "@react-icons/all-files"

export default function Post() {
    const [all, setAll] = useState(true)
    const [numero, setNumero] = useState(false)
    const [funcion, setFuncion] = useState(false)
    const [variable, setVariable] = useState(false)
    const [desigualdad, setDesigualdad] = useState(false)
    const [open, setOpen] = useState(false)

    const dataQuery = useStaticQuery(graphql`{
        allTopicsJson {
            nodes {
                name
                slug
                title
                date
                topic
                style
            }
        }
    }`)

    const data = dataQuery && dataQuery.allTopicsJson ?  dataQuery.allTopicsJson.nodes : ""

    return (
        <div className="mb-12">

            <header className="py-12 border-tealwk border-solid border-t-8">
                <div className="flex max-w-4xl mx-auto items-center justify-between px-4 md:px-2 lg:px-0 xl:px-0">
                    <h2 className="capitalize text-3xl md:text-6xl lg:text-6xl xl:text-6xl font-bold">Publicaciones</h2>
                    <img src={search} alt='Mujer buscando con binoculares' className="cursor-pointer h-28 md:h-40 lg:h-64 xl:h-64" onClick={() => window.open('https://uvm.mx/')}/>
                </div>
            </header>
            <nav className="flex items-center justify-end flex-wrap bg-tealwk py-4 ">
                <div className="flex w-full items-center justify-between lg:hidden px-6" onClick={() => {setOpen(!open)}}>
                    <p className="text-white">Filtrar</p>
                    {
                    open ? 
                    <IconContext.Provider value={{size: "3em", color: "white"}}>
                        <RiArrowDropUpLine/>
                    </IconContext.Provider> :
                    <IconContext.Provider value={{size: "3em", color: "white"}}>
                        <RiArrowDropDownLine/>
                    </IconContext.Provider>
                    }
                </div>
                <div className={open ? "w-full block lg:flex flex-grow  lg:items-center lg:w-auto text-left md:text-left lg:text-center xl:text-center pl-6 lg:pl-0 xl:pl-0" : "w-full hidden lg:flex flex-grow  lg:items-center lg:w-auto text-center"}>
                    <div className="text-sm lg:text-base xl:text-base lg:flex-grow">
                        <p className={all ? "block mt-4 lg:inline-block lg:mt-0 text-gray-800 font-bold underline mr-10" : "block mt-4 lg:inline-block lg:mt-0 text-white hover:text-tealwkli mr-10"} onClick={() => {setAll(true) ; setNumero(false); setFuncion(false); setVariable(false); setDesigualdad(false); setOpen(false) }}>
                        Todos
                        </p>
                        <p className={desigualdad ? "block mt-4 lg:inline-block lg:mt-0 text-pinkbo font-bold underline mr-10" : "block mt-4 lg:inline-block lg:mt-0 text-white hover:text-tealwkli mr-10"} onClick={() => {setAll(false) ; setNumero(false); setFuncion(false); setVariable(false); setDesigualdad(true); setOpen(false) }}>
                        Desigualdades
                        </p>
                        <p className={funcion ? "block mt-4 lg:inline-block lg:mt-0 text-yellowwk font-bold underline mr-10" : "block mt-4 lg:inline-block lg:mt-0 text-white hover:text-tealwkli mr-10"} onClick={() => {setAll(false) ; setNumero(false); setFuncion(true); setVariable(false); setDesigualdad(false); setOpen(false) }}>
                        Funciones
                        </p>
                        <p className={numero ? "block mt-4 lg:inline-block lg:mt-0 text-uvm font-bold underline mr-10" : "block mt-4 lg:inline-block lg:mt-0 text-white hover:text-tealwkli mr-10"} onClick={() => {setAll(false) ; setNumero(true); setFuncion(false); setVariable(false); setDesigualdad(false); setOpen(false) }}>
                        Números
                        </p>
                        <p className={variable ? "block mt-4 lg:inline-block lg:mt-0 text-tealwkbo font-bold underline mr-10" : "block mt-4 lg:inline-block lg:mt-0 text-white hover:text-tealwkli mr-10"} onClick={() => {setAll(false) ; setNumero(false); setFuncion(false); setVariable(true); setDesigualdad(false); setOpen(false) }}>
                        Variables
                        </p>
                    </div>
                </div>    
            </nav>
            <ul className="max-w-4xl mx-auto pb-8">
                {data.map((item, index) => {
                    return(
                        <>
                        { all &&
                            <li className="bg-white shadow mt-4 flex" key={index}>
                                <p className={`vertical-text ${item.style} text-white`}> { item.topic } </p>
                                <div className="flex items-center flex-1 p-5">
                                    <div className="flex-1">
                                        <h3 className="font-extrabold text-base md:text-lg lg:text-xl xl:text-xl text-tealwk" >{item.name}</h3>
                                        <span className={`inline-block p-2 radius text-xs md:text-sm lg:text-base xl:text-base font-light ${item.style}`}>fecha de publicación: {item.date}</span>
                                    </div>
                                    <Link to={`/${item.slug}`} className="btn mt-52 md:mt-4 lg:mt-4 xl:mt-4 inline-block text-xs md:text-sm lg:text-base xl:text-base">
                                        Ver publicación
                                    </Link>
                                </div>
                            </li>
                        }
                        { numero && item.topic === "Números" &&
                            <li className={item.topic === "Números" ? "bg-white shadow mt-4 flex" : "hidden"} key={index}>
                                <p className={`vertical-text ${item.style} text-white`}> { item.topic } </p>
                                <div className="flex items-center flex-1 p-8">
                                    <div className="flex-1">
                                        <h3 className="font-extrabold text-xl text-tealwk" >{item.name}</h3>
                                        <span className={`inline-block p-2 radius font-light ${item.style}`}>fecha de publicación: {item.date}</span>
                                    </div>
                                    <Link to={`/${item.slug}`} className="btn mt-4 inline-block">
                                        Ver publicación
                                    </Link>
                                </div>
                            </li>
                        }
                        { funcion && item.topic === "Funciones" &&
                            <li className={item.topic === "Funciones" ? "bg-white shadow mt-4 flex" : "hidden"} key={index}>
                                <p className={`vertical-text ${item.style} text-white`}> { item.topic } </p>
                                <div className="flex items-center flex-1 p-8">
                                    <div className="flex-1">
                                        <h3 className="font-extrabold text-xl text-tealwk" >{item.name}</h3>
                                        <span className={`inline-block p-2 radius font-light ${item.style}`}>fecha de publicación: {item.date}</span>
                                    </div>
                                    <Link to={`/${item.slug}`} className="btn mt-4 inline-block">
                                        Ver publicación
                                    </Link>
                                </div>
                            </li>
                        }
                        { variable && item.topic === "Variables" &&
                            <li className={item.topic === "Variables" ? "bg-white shadow mt-4 flex" : "hidden"} key={index}>
                                <p className={`vertical-text ${item.style} text-white`}> { item.topic } </p>
                                <div className="flex items-center flex-1 p-8">
                                    <div className="flex-1">
                                        <h3 className="font-extrabold text-xl text-tealwk" >{item.name}</h3>
                                        <span className={`inline-block p-2 radius font-light ${item.style}`}>fecha de publicación: {item.date}</span>
                                    </div>
                                    <Link to={`/${item.slug}`} className="btn mt-4 inline-block">
                                        Ver publicación
                                    </Link>
                                </div>
                            </li>
                        }
                        { desigualdad && item.topic === "Desigualdades" &&
                            <li className={item.topic === "Desigualdades" ? "bg-white shadow mt-4 flex" : "hidden"} key={index}>
                                <p className={`vertical-text ${item.style} text-white`}> { item.topic } </p>
                                <div className="flex items-center flex-1 p-8">
                                    <div className="flex-1">
                                        <h3 className="font-extrabold text-xl text-tealwk" >{item.name}</h3>
                                        <span className={`inline-block p-2 radius font-light ${item.style}`}>fecha de publicación: {item.date}</span>
                                    </div>
                                    <Link to={`/${item.slug}`} className="btn mt-4 inline-block">
                                        Ver publicación
                                    </Link>
                                </div>
                            </li>
                        }
                        </>
                    )
                })}
            </ul>
            <div className="max-w-6xl w-80 mx-auto my-10">
                <img className="h-56 w-full sm:h-72 md:h-full lg:w-full lg:h-full" src={read} alt="Mujer sentada sobre libros, leyendo libros"/>
            </div>
        </div>

        
    )
}