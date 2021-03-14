import React from 'react'
import uvm from '../img/uvm.png'
import PersonalCard from './personalCard'
import education from '../img/education.svg'

const data = [
    {
        name: "Arturo Gabriel Araujo Alvarez",
        degree: "Licenciatura en Ingenieria en Tecnologias y Sistemas de Información",
        photo: 0,
        msg: "Tengo 25 años, vivo en la CDMX. Actualmente soy estudiante y laboro de tiempo completo como desarrollador front-end para Liverpool."
    },
    {
        name: "Jésus Baldomero Álvarez Cntreras",
        degree: "Licenciatura en Ingenieria en Tecnologias y Sistemas de Información",
        photo: 1,
        msg: "Tengo 25 años, vivo en la CDMX. Actualmente soy estudiante y laboro de tiempo completo como desarrollador front-end para Liverpool."
    },
    {
        name: "Elia Patricia De Anda Centeno",
        degree: "Licenciatura en Ingenieria en Tecnologias y Sistemas de Información",
        photo: 2,
        msg: "Tengo 25 años, vivo en la CDMX. Actualmente soy estudiante y laboro de tiempo completo como desarrollador front-end para Liverpool."
    },
    {
        name: "César Osvaldo García Espinosa",
        degree: "Licenciatura en Ingenieria en Tecnologias y Sistemas de Información",
        photo: 3,
        msg: "Tengo 25 años, vivo en la CDMX. Actualmente soy estudiante y laboro de tiempo completo como desarrollador front-end para Liverpool."
    },
    {
        name: "Rocío Belén Martínez Hernández",
        degree: "Licenciatura en Ingenieria en Tecnologias y Sistemas de Información",
        photo: 4,
        msg: "Tengo 25 años, vivo en la CDMX. Actualmente soy estudiante y laboro de tiempo completo como desarrollador front-end para Liverpool."
    },
    {
        name: "Ángel Mercurio Rivera Rivera",
        degree: "Licenciatura en Ingenieria en Tecnologias y Sistemas de Información",
        photo: 5,
        msg: "Tengo 25 años, vivo en la CDMX. Actualmente soy estudiante y laboro de tiempo completo como desarrollador front-end para Liverpool."
    },
    {
        name: "Aurelio Rodriguez Uribe",
        degree: "Licenciatura en Ingenieria en Tecnologias y Sistemas de Información",
        photo: 6,
        msg: "Tengo 25 años, vivo en la CDMX. Actualmente soy estudiante y laboro de tiempo completo como desarrollador front-end para Liverpool."
    },
    {
        name: "Blanca Melissa Temores Uribe",
        degree: "Licenciatura en Ingenieria en Tecnologias y Sistemas de Información",
        photo: 7,
        msg: "Tengo 25 años, vivo en la CDMX. Actualmente soy estudiante y laboro de tiempo completo como desarrollador front-end para Liverpool."
    }

]

export default function team() {
    return (
        <>
            <div className="bg-uvm py-4 flex justify-center items-center mt-8">
                <img src={uvm} alt='Logo UVM' className="cursor-pointer h-10 md:h-8 lg:h-14 xl:h-14" onClick={() => window.open('https://uvm.mx/')}/>
            </div>
            <div className="bg-uvm py-4 flex justify-center items-center">
                <h2 className="text-white">Profesora: Ing. Viridiana Jimenez Martinez </h2>
            </div>

            {data.map(person => (
                <section className="max-w-4xl mx-auto my-4 ">
                    <PersonalCard data={person}/>
                </section>
            ))}

            <div className="max-w-6xl w-80 mx-auto my-10">
                <img className="h-56 w-full sm:h-72 md:h-full lg:w-full lg:h-full" src={education} alt="Mujer sobre libros soteniendo un virrete"/>
            </div>
            <div className="bg-uvm py-4 flex justify-end items-end mb-8 pr-4">
                <img src={uvm} alt='Logo UVM' className="cursor-pointer h-10 md:h-8 lg:h-14 xl:h-14" onClick={() => window.open('https://uvm.mx/')}/>
            </div>
        </>
    )
}
