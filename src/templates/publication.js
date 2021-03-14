import { graphql } from 'gatsby'
import React from 'react'
import Topics from '../components/topics'
import Header from '../components/header'
import Footer from '../components/footer'


export default function template(props) {
    const pageData = props.data.topicsJson
    return (
        <>
            <Header/>
            <div className="mb-12">
                <header className="py-12 border-tealwk border-solid border-t-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="capitalize text-6xl font-bold">{pageData.title}</h2>
                    </div>
                </header>
                <ul className="max-w-4xl mx-auto pb-8">
                    {pageData.contents.map((item, index) => {
                        return(
                            <div dangerouslySetInnerHTML={{ __html: item.degree }}></div>
                        )
                    })}
                </ul>
                <Topics label="Más publicaciones"/>
            </div>
            <Footer/>
        </>
    )
}

export const query = graphql`
query($slug: String){
    topicsJson(slug: { eq: $slug}){
        title
        slug
        contents {
            name
            degree
            score
        }
    }
}`

