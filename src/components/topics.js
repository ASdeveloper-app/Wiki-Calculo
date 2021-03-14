import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'

export default function Topics(props) {
    const data = useStaticQuery(graphql`{
        allTopicsJson{
            edges {
                node {
                    slug
                    title
                }
            }
        }
    }`)
    return (
        <div className="mt-8 px-6">
            <h2 className="text-3xl font-bold text-center">Publicaciones</h2>
            <div className="max-w-6xl mx-auto overflow-x-scroll pb-2">
                    <nav className="flex mt-6">
                    {
                        data.allTopicsJson.edges.map((element,  index) => {
                            const { node } = element
                            return (
                                <>
                                    <div className="shadow bg-white mr-4 rounded flex-shrink-0 img-size" key={index}>
                                        <header className="h-40 bg-cover bg-center rounded-t" style={{backgroundImage: `url('https://www.imagen.com.mx/assets/img/imagen_share.png')`}}></header>
                                        <div className="p-8">
                                            <h4 className="font-bold leading-loose h-20 lg:h-12 xl-12 overflow-y-hidden">{node.title}</h4>
                                            <Link to={`/${node.slug}`} className="btn inline-block mt-4">
                                                Ver publicación
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
