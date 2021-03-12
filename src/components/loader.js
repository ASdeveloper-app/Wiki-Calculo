import React from 'react'

export default function loader() {
    return (
        <>
            {
                showFormLoading ? (<Spinner/>) : (
                    <>
                        {FORM_SUBMIT_STATUS.cta[locale]}
                        <StyledIcon aria-hidden="true">
                            <use xlinkHref="#correct"/>
                        </StyledIcon>
                    </>
                )
            }
        </>
    )
}
