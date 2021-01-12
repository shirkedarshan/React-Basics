import React from "react"

function Product(props) {
  return (
    <div>
        <h1>{props.name}</h1>
        <p>Rs. {props.price}</p>
        <p>Description : {props.description}</p>
    </div>
  )
}

export default Product