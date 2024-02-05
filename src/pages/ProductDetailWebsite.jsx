import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../api/product';

const ProductDetailWebsite = () => {
    const [product,setproduct] = useState({});
    const { id } = useParams();
    useEffect(() => {
       (async() => {
            const data = await getProductById(id);
            setproduct(data);
       })();
    })
    
  return (
    <>
        <div className="row">
            <div className="col">
              <img width={'500vh'} className='tw-max-h-100' src={product.image} alt={product.className} />
            </div>
            <div className="col">
                <h2>{product.name}</h2>
                <h3 className='tw-mt-6 tw-mb-8 tw-text-red-600'>{product.price}$</h3>
                <span>{product.describe}</span>
            </div>
        </div>
    </>
  )
}

export default ProductDetailWebsite