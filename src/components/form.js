import React from 'react'
import Loader from './loader'

export default function contact({ locale }) {

    const [message, setMessage] = useState("");
    const [botField, setBotField] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [showFormLoading, setShowFormLoading] = useState(false);
    const [showFormSuccess, setShowFormSuccess] = useState(false);
    const [showFormError, setShowFormError] = useState(false);
    const [formErrorRes, setFormErrorRes] = useState({});

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

        const form = e.target
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": form.getAttribute("name"),
                message, 
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

    return (
        <>
            <form 
            className="mt-16 text-center" 
            name="comments" 
            method="post" 
            action={thanksURL} 
            data-netlify="true" 
            data-netlify-honeypot="botfield" 
            onSubmit={handleSubmit}>
                <label htmlFor="form-content" className="text-white block mb-2">¿Comentarios o sugerencias?</label>
                <input type="hidden" name="form-name" aria-hidden="true" value="comments" data-netlify-honeypot="botfield"/>
                <input
                style={{ display: "none" }}
                aria-hidden="true"
                name="botfield"
                value={botField}
                onChange={(e) => setBotField(e.target.value)}
                />
                <div className="flex shadow rounded bg-white border p-2">
                    <textarea 
                        id="form-content"
                        name="form-content"
                        className="flex-1 py-2 px-3 text-red-900 focus:outline-none"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button className="btn ml-4">Enviar</button>
                </div>
            </form>
            {
                formSubmitted && (
                    <Loader
                    showFormLoading={ showFormLoading }
                    showFormSuccess={ showFormSuccess }
                    showFormError={ showFormError }
                    formErrorRes={ formErrorRes }
                    locale={locale}
                )
            }
        </>
    )
}
