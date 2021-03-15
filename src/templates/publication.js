import { graphql } from 'gatsby'
import React from 'react'
import Topics from '../components/topics'
import Header from '../components/header'
import Footer from '../components/footer'
import image from '../img/cohete.png'
import publish from '../img/publish.svg'
import { DiscussionEmbed } from "disqus-react"


export default function template(props) {
    
    const pageData = props.data.topicsJson

    const slug = pageData ? pageData.slug : ''

    const title = pageData ? pageData.name : ''

    console.log(slug, title , "sasassa")
    const disqusConfig = {
        shortname: process.env.GATSBY_DISQUS_NAME,
        config: { identifier: slug, title },
    }
    
    console.log(pageData,"wwe")
    return (
        <>
            <Header/>
            <div className="mb-12">
                <header className="py-2 lg:py-2 xl:py-2 border-tealwk border-solid border-t-8">
                    <div className="max-w-4xl mx-auto px-2 mt-6">
                        <h2 className="capitalize text-2xl font-bold text-center pb-4">{pageData.name}</h2>
                    </div>
                    <div className="max-w-6xl w-4/5 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-auto mb-4 mt-2">
                        <img className="h-56 w-full sm:h-72 md:h-full lg:w-full lg:h-full" src={pageData.src} alt="Hombre haciendo publicación"/>
                    </div>
                    <div className="flex max-w-md mx-auto justify-between">
                        <p className={`${pageData.style} p-3 rounded-full text-white`}>{pageData.topic}</p>
                        <p className="font-light italic p-3 ">{pageData.date}</p>
                    </div>
                </header>
                <ul className="max-w-4xl mx-auto pb-8 px-4">
                    <div dangerouslySetInnerHTML={{ __html: pageData.description }}></div>
                </ul>

                {/* <DiscussionEmbed {...disqusConfig} /> */}
                
                <Topics label="Más publicaciones"/>
                <div className='my-4 justify-center hidden'>
                    <img src={image} alt='funciones'/>
                </div>
            </div>
            <div className="max-w-6xl w-80 mx-auto my-10">
                <img className="h-56 w-full sm:h-72 md:h-full lg:w-full lg:h-full" src={publish} alt="Hombre haciendo publicación"/>
            </div>
            <Footer/>
        </>
    )
}

export const query = graphql`
query($slug: String){
    topicsJson(slug: { eq: $slug}){
        slug
        date
        topic
        name
        style
        description
        src
    }
}`

