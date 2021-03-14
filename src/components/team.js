import React from 'react'
import uvm from '../img/uvm.png'
import PersonalCard from './personalCard'
import education from '../img/education.svg'

const data = [
    {
        name: "Arturo Gabriel Araujo Alvarez",
        degree: "Licenciatura en Ingenieria en Tecnologias y Sistemas de Información",
        photo: 0,
        msg: "Tengo 25 años, vivo en la CDMX. Actualmente soy estudiante y trabajo de tiempo completo como desarrollador front-end para Liverpool."
    },
    {
        name: "Jésus Baldomero Álvarez Cntreras",
        degree: "Licenciatura en Economia y Finanzas",
        photo: 1,
        msg: "Laboro en un despacho juridico dando asesoria contable, legal y de comercio exterior y aduanas y soy estudiante."
    },
    {
        name: "Elia Patricia De Anda Centeno",
        degree: "Licenciatura en Ingenieria y de Sistemas",
        photo: 2,
        msg: "Soy de Guadalajara, Jalisco. Soy especialista en recepción y envío de materiales electronicos"
    },
    {
        name: "César Osvaldo García Espinosa",
        degree: "Licenciatura en Ingenieria Industrial",
        photo: 3,
        msg: "Ocupación: Estudiante"
    },
    {
        name: "Rocío Belén Martínez Hernández",
        degree: "Licenciatura en Economia y Finanzas",
        photo: 4,
        msg: "Trabajo en Lala en planeación de ventas y soy estudiante."
    },
    {
        name: "Ángel Mercurio Rivera Rivera",
        degree: "Licenciatura ...",
        photo: 5,
        msg: "..."
    },
    {
        name: "Aurelio Rodriguez Uribe",
        degree: "Licenciatura en Ingenieria en Diseño de Software y Redes",
        photo: 6,
        msg: "Ocupación: Estudiante."
    },
    {
        name: "Blanca Melissa Temores Uribe",
        degree: "Licenciatura en Ingenieria Industrial",
        photo: 7,
        msg: "Laboro como asistente de una empresa de desarrollo electronico y actualmente soy estudiante."
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
