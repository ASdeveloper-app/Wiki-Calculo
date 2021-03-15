import React from 'react'
import arturo from '../img/arturo5.jpg'
import jesus from '../img/men.png'
import elia from '../img/woman.jpg'
import cesar from '../img/men.png'
import rocio from '../img/woman.jpg'
import angel from '../img/men.png'
import aurelio from '../img/men.png'
import blanca from '../img/woman.jpg'

export default function personalCard(props) {
    const data = props ? props.data : ""

    const photo = () =>{
        if(data){
            if(data.photo === 0){
                return arturo
            }
            if(data.photo === 1){
                return jesus
            }
            if(data.photo === 2){
                return elia
            }
            if(data.photo === 3){
                return cesar
            }
            if(data.photo === 4){
                return rocio
            }
            if(data.photo === 5){
                return angel
            }
            if(data.photo === 6){
                return aurelio
            }
            if(data.photo === 7){
                return blanca
            }
        }
    }
    return (
        <>
            <>
            {
                data.photo === 0 || data.photo === 2 || data.photo === 4 || data.photo === 6 ?
                    <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 justify-center sm:justify-center md:justify-between lg:justify-between xl:justify-between " >
                        <img className="w-32 h-32 md:w-48 md:h-auto rounded-xl mx-auto md:mx-0 lg:mx-0 xl:mx-0" src={photo()} alt={data.name} width="384" height="512" />
                        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                            <blockquote>
                            <p className="text-lg font-semibold">
                                “{data.msg}”
                            </p>
                            </blockquote>
                            <figcaption className="font-medium">
                            <div className="text-cyan-600">
                                {data.degree}
                            </div>
                            <div className="text-gray-500">
                                {data.name}
                            </div>
                            </figcaption>
                        </div>
                    </figure> : 
                    <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 justify-center sm:justify-center md:justify-between lg:justify-between xl:justify-between " >
                        <div className="pb-6 md:p-8 text-center md:text-left space-y-4">
                            <blockquote>
                            <p className="text-lg font-semibold">
                                “{data.msg}”
                            </p>
                            </blockquote>
                            <figcaption className="font-medium">
                            <div className="text-cyan-600">
                                {data.degree}
                            </div>
                            <div className="text-gray-500">
                                {data.name}
                            </div>
                            </figcaption>
                        </div>
                        <img className="w-32 h-32 md:w-48 md:h-auto rounded-xl mx-auto md:mx-0 lg:mx-0 xl:mx-0" src={photo()} alt={data.name} width="384" height="512" />
                    </figure>
            }
        </>
        </>
    )
}

