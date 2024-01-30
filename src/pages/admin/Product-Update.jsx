import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../api/product';
import { useNavigate } from 'react-router-dom';


const ProductUpdatePage = ({ onUpdate }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { register,handleSubmit,reset} = useForm();

    useEffect(() => {
        (async () =>{   
            const data = await getProductById(id);
            reset(data);
            // console.log(data);
        })();
    },[id]);

    const onHandleSubmit = (data) =>{
        // console.log(data);
        onUpdate(data);
        navigate("/admin/product");
    }
    
  return (
    <>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Cập nhât sản phẩm</h1>
        </div>
        <form onSubmit={handleSubmit(onHandleSubmit)}>
            <div className="mb-3 mt-5">
                <label htmlFor="productName" className="form-label">Tên sản phẩm</label>
                <input type="text"  {...register("name")} className="form-control" id="productName" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="productImage" className="form-label">Hình ảnh</label>
                <input type="text" {...register("image")} className="form-control" id="productImage" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="productPrice" className="form-label">Giá</label>
                <input type="number" {...register("price")} className="form-control" id="productPrice" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="productPrice" className="form-label">Mô tả</label>
                <textarea  {...register("describe")} className="form-control" id="productDescribe" cols="30" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Xác nhận</button>
        </form>
    </>
  )
}

export default ProductUpdatePage