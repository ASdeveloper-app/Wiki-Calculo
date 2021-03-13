import React, { useState } from 'react';
import Loader from './loader'

export default function Contact({ locale }) {

    const [message, setMessage] = useState("");
    const [botField, setBotField] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [showFormLoading, setShowFormLoading] = useState(false);
    const [showFormSuccess, setShowFormSuccess] = useState(false);
    const [showFormError, setShowFormError] = useState(false);
    const [formErrorRes, setFormErrorRes] = useState({});

    const thanksURL = <h1>Funciona</h1>

    function encode(data) {
        return Object.keys(data)
            .map(
            (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
            )
            .join("&");
    }

    function handleFormSent(){
        let timer = setTimeout(() => {
            setShowFormLoading(false)
            setShowFormSuccess(true)

            clearTimeout(timer)
        }, 800)
        
    }

    function handleFormError(error) {
        setShowFormLoading(false)
        setShowFormError(true)
        setFormErrorRes(error)
    }

    async function handleSubmit(e){
        e.preventDefault()

        setShowFormLoading(true)
        setFormSubmitted(true)

        console.log(message, "forms")

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": "comments",
                message, 
                test: "prueba de fuego",
                botfield: botField,
            })
        })
        .then(() => {
            handleFormSent()
        })
        .catch((error) => {
            handleFormError(error)
        })
    }
    
    console.log(message, "message")
    return (
        <header className="bg-gray-600">
            <div className="container mx-auto pt-6 pb-12 max-w-4xl">
                <form 
                className="text-center" 
                name="comments" 
                method="post" 
                action={thanksURL} 
                data-netlify="true" 
                data-netlify-honeypot="botfield" 
                onSubmit={handleSubmit}>

                    <label htmlFor="form-content" className="text-white block mb-2">¿Comentarios o sugerencias?</label>
                    <div className="flex shadow rounded bg-white border p-2">
                        <textarea 
                            id="form-content"
                            name="form-content"
                            className="flex-1 py-2 px-3 text-red-900 focus:outline-none"
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <button className="btn ml-4" type="submit">Enviar</button>
                    </div>
                    <input type="hidden" name="form-name" aria-hidden="true" value="comments" data-netlify-honeypot="botfield"/>
                    <input
                    style={{ display: "none" }}
                    aria-hidden="true"
                    name="botfield"
                    value={botField}
                    onChange={(e) => setBotField(e.target.value)}
                    />
                </form>
                {
                    formSubmitted && (
                        <Loader
                        showFormLoading={ showFormLoading }
                        showFormSuccess={ showFormSuccess }
                        showFormError={ showFormError }
                        formErrorRes={ formErrorRes }
                        locale={locale}/>
                    )
                }
            </div>
        </header>
    )
}
