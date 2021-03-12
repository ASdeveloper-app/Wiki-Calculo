import React from 'react'

export default function loader(props) {
    console.log(props)
    return (
        <>
            {
                props && props.showFormLoading ? <h1>Spinner</h1> : (
                    <>
                        <h2>no spinner</h2>
                    </>
                )
            }
        </>
    )
}
