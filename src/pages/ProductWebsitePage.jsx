import React from 'react'

const ProductWebsitePage = ({ product }) => {
    const products = product
    // console.log(product)
  return (
    <>
        <div className="row gap-0.5">
            {products.map((product,index) => (
                <div className="col-md-4 " key={index}>
                    <h4>
                        <a href="">{product.name}</a>
                    </h4>
                </div>
            ))}
        </div>
    </>
  )
}

export default ProductWebsitePage