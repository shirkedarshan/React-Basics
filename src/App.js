import React from "react"
import productsData from "./vschoolProducts"
import Product from "./Product"
function App() {
  const productComponent = productsData.map( data => {
    return(
      <Product key="id" name={data.name} price={data.price} description={data.description} />
    )
  })
  return (
    <div>
        {productComponent}
    </div>
  )
}

export default App