import React from 'react'

export default function contact() {
    return (
        <form className="mt-16 text-center">
            <label htmlFor="form-content" className="text-white block mb-2">¿Comentarios o sugerencias?</label>
            <div className="flex shadow rounded bg-white border p-2">
                <textarea 
                    id="form-content"
                    name="form-content"
                    className="flex-1 py-2 px-3 text-red-900 focus:outline-none"
                ></textarea>
                <button className="btn ml-4">Enviar</button>
            </div>
        </form>
    )
}
