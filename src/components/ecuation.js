import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'

export default function Ecuation(props) {
    const data = useStaticQuery(graphql`{
        allEducationJson{
            edges {
                node {
                    slug
                    title
                    description
                }
            }
        }
    }`)
    return (
        <div className="my-8 px-6">
            <h2 className="text-3xl font-bold text-center">Acerca de</h2>
            <div className="max-w-4xl mx-auto overflow-x-scroll">
                    <nav className="flex mt-6">
                    {
                        data.allEducationJson.edges.map((element,  index) => {
                            const { node } = element
                            return (
                                <>
                                    <div className="shadow bg-white mr-4 rounded flex-shrink-0 img-size" >
                                        <header className="h-40 bg-cover bg-center" style={{backgroundImage: `url('https://www.imagen.com.mx/assets/img/imagen_share.png')`}}></header>
                                        <div className="p-8">
                                            <h4 className="font-bold leading-loose h-20 overflow-y-hidden">{node.title}</h4>
                                            <p className="font-light">{node.description}</p>
                                            <Link to={`/${node.slug}`} className="btn inline-block mt-4">
                                                Ir
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                    </nav>
            </div>
        </div>
    )
}
