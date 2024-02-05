import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const ProductWebsitePage = ({ product }) => {
    const products = product
    console.log(product)
  return (
    <>
        <div className="row ">
            {products.map((product,index) => (
                <div className="col-md-3 mb-5 " key={index}>
                    <div className="card" key={index} style={{width: '18rem'}}>
                        <Link to={`/products/${product.id}`}>
                            <img src={product.image} className="card-img-top" alt={product.name} />
                        </Link>
                        <div className="card-body">
                            <Link to={`/products/${product.id}`} className='text-decoration-none text-dark'>
                                <h4 className="card-title hover:tw-underline hover:tw-opacity-95">{product.name}</h4>
                            </Link>
                            <h5 className="card-text font-weight-bold ">{product.price}$</h5>
                            <NavLink to={`/products/${product.id}`} className=" btn btn-danger ">Đặt hàng</NavLink>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default ProductWebsitePage