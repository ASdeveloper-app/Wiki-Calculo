import { graphql, Link } from 'gatsby'
import React from 'react'
import Ecuation from '../components/ecuation'

export default function template(props) {
    const pageData = props.data.educationJson
    return (
        <div>
            <header className="py-12 border-gray-800 border-solid border-t-8">
                <div className="max-w-4xl mx-auto">
                    <Link to="/" className="uppercase underline text-gray-700">
                        Regresar al inicio
                    </Link>
                    <h2 className="capitalize text-6xl font-bold">{pageData.title}</h2>
                    <p className="text-xl">{pageData.description}</p>
                </div>
            </header>
            <ul className="max-w-4xl mx-auto pb-8">
                {pageData.items.map((item, index) => {
                    return(
                    <li className="bg-white shadow mt-4 flex" key={index}>
                        <p className="vertical-text"> { pageData.slug } </p>
                        <div className="flex items-center flex-1 p-8">
                            <div className="flex-1">
                                <h3>{item.name}</h3>
                                <span className="inline-block p-2 radius bg-gray-600 ">{item.degree}</span>
                            </div>
                            <div className="inline-block">
                                <span className="inline-block p-2 text-2xl bg-green-200 text-green-700 ">{item.score}</span>
                            </div>
                            {/* <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn mt-4 inline-block"> Ver más </a> */}
                        </div>
                    </li>
                    )
                })}
            </ul>
            <Ecuation/>
        </div>
    )
}

export const query = graphql`
query($slug: String){
    educationJson(slug: { eq: $slug}){
        title
        description
        slug
        items {
            name
            degree
            score
        }
    }
}`

