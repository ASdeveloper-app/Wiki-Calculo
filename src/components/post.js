import React from 'react'
import search from '../img/search.jpg'
import read from '../img/read.svg'
import { Link, useStaticQuery, graphql } from 'gatsby'

export default function Post() {
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
                <div className="flex max-w-4xl mx-auto items-center justify-between">
                    <h2 className="capitalize text-6xl font-bold">Publicaciones</h2>
                    <img src={search} alt='Mujer buscando con binoculares' className="cursor-pointer h-10 md:h-8 lg:h-14 xl:h-64" onClick={() => window.open('https://uvm.mx/')}/>
                </div>
            </header>
            <ul className="max-w-4xl mx-auto pb-8">
                {data.map((item, index) => {
                    return(
                    <li className="bg-white shadow mt-4 flex" key={index}>
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
                    )
                })}
            </ul>
            <div className="max-w-6xl w-80 mx-auto my-10">
                <img className="h-56 w-full sm:h-72 md:h-full lg:w-full lg:h-full" src={read} alt="Mujer sentada sobre libros, leyendo libros"/>
            </div>
        </div>

        
    )
}