import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

export default function Topics() {
    const data = useStaticQuery(graphql`{
        wikiJson(data: {}) {
            data {
                courses {
                    name
                    contents
                }
            }
        }
    }`)

    const topics = data &&  data.wikiJson ? data.wikiJson.data.courses : ''

    return (
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center">Contenido</h2>
                    <div className="flex justify-around">
                        {topics.map(courses => (
                            <div className="shadow-xl p-4 bg-white mr-4 rounded">
                                <h4 className="font-bold">{courses.name}</h4>
                                <div className="text-center">
                                    <span className="inline-block p-2 mt-2 bg-gray-700 text-white rounded">
                                        Contenido: blablablablabla
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
