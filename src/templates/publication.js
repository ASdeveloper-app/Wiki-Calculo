import { graphql } from 'gatsby'
import React from 'react'
import Topics from '../components/topics'
import Header from '../components/header'
import Footer from '../components/footer'
import image from '../img/cohete.png'


export default function template(props) {
    const pageData = props.data.topicsJson
    console.log(pageData,"wwe")
    return (
        <>
            <Header/>
            <div className="mb-12">
                <header className="py-6 lg:py-12 xl:py-12 border-tealwk border-solid border-t-8">
                    <div className="max-w-4xl mx-auto px-2">
                        <h2 className="capitalize text-2xl font-bold">{pageData.name}</h2>
                    </div>
                </header>
                <ul className="max-w-4xl mx-auto pb-8 px-4">
                    <div dangerouslySetInnerHTML={{ __html: pageData.description }}></div>
                </ul>
                
                <>


                <div class='flex my-4 justify-center'>
                    <img src={image} alt='funciones'/>
                </div>



                </>
                <Topics label="Más publicaciones"/>
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
    }
}`

