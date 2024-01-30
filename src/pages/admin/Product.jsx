import React from "react";
import { Link } from "react-router-dom";

const productPage = ({ product, onRemove }) => {
  return (
    <>
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 className="h2">Quản lí sản phẩm</h1>
      <div className="btn-toolbar mb-2 mb-md-0">
        <div className="btn-group me-2">
          <Link to="/admin/product/add" className="btn btn-sm btn-outline-secondary" >
          Thêm       
          </Link>
        </div>
      </div>
    </div>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Stt</th>
              <th scope="col">Hình Ảnh</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Giá</th>
              <th scope="col">Mô tả</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {product.map((product, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img width={50} src={product.image} alt={product.name} />
                  </td>
                  <td>
                    <h4>{product.name}</h4>
                  </td>
                  <td>
                    <span>{product.price}</span>
                  </td>
                  <td>
                    <span>{product.describe}</span>
                  </td>
                  <td>
                    <div className="d-flex">
                      <Link to={`/admin/product/${product.id}/update`} className="btn btn-primary">Sửa</Link>
                      <button
                        className="btn btn-danger ml-2"
                        onClick={() => onRemove(product.id)}
                      >
                        Xóa
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
            <tr></tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default productPage;
