import React from 'react'
import teachingOnBoard from '../img/teachingOnBoard.jpg'

export default function hero() {
    return (
        <div>
        <h2 className="text-3xl font-bold text-center py-4">Acerca de</h2>
        <div className="relative bg-white overflow-hidden bg-hero">
            <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-3/4">
                <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={teachingOnBoard} alt="Hombre enseñando en una pizarra"/>
            </div>
            <div className="max-w-4xl mx-auto">
                <div className="relative z-10 pb-0 sm:pb-16 md:pb-20 lg:pb-0 xl:pb-0 bg-white lg:w-full max-w-vw max-ml-vw">
                    <main className="mt-10 sm:mt-12 md:mt-16 lg:mt-2 xl:mt-4 mb-10 sm:mb-12 md:mb-16 lg:mb-2 xl:mb-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-0 lg:py-4 xl:py-4">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">Aprende las bases de</span>
                                <span className="block text-tealwkli xl:inline">Cálculo diferencial e integral</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            En Wiki Cálculo encontraras diversos temas sobre Cálculo, donde se desarrollan conceptos de la manera mas entendible posible. De estudiantes para estudiantes.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-tealwkbo bg-bluewk hover:bg-blueli md:py-4 md:text-lg md:px-10 border-b-4 border-blueli">
                                    Comencemos
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
        </div>
    )
}
