import React from 'react'
import logo from '../img/Logo uvm.png'
import Form from './form'

export default function Home() {
    return (
        <header className="bg-gray-600">
            <div className="container mx-auto p-12 max-w-4xl">
                <div className="flex justify-center items-center">
                    <div className="flex-1">
                        <h1 className="font-bold text-white text-5xl"> Wiki Cálculo</h1>
                        <p className=" font-light text-white">Comunidad y aprendizaje.</p>
                    </div>
                    <img src={logo} alt='Hombre enseñando' style={{height: "10vh"}}></img>
                </div>
            </div>
        </header>
    )
}


