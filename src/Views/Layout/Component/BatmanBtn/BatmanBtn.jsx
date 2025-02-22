import React from 'react'
import "./BatmanBtn.css"
const BatmanBtn = ({ text }) => {
    return (
        <>
            <button>
                <span>{text}</span>
            </button>
        </>
    )
}

export default BatmanBtn