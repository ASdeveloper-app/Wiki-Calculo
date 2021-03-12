import React from 'react'

export default function loader({locale, props}) {
    return (
        <>
            {
                props.showFormLoading ? (<h1>Spinner</h1>) : (
                    <>
                        <h2>no spinner</h2>
                    </>
                )
            }
        </>
    )
}
